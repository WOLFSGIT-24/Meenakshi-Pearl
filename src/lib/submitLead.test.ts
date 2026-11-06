import { submitLead } from './submitLead';

test('posts only the form fields plus a timestamp', async () => {
  vi.stubEnv('PUBLIC_WEBHOOK_URL', 'https://hook.example/x');
  const fetchMock = vi.fn().mockResolvedValue({ ok: true });
  vi.stubGlobal('fetch', fetchMock);

  await submitLead({ name: 'A', phoneNumber: '1', email: 'a@b.c' });

  const [url, opts] = fetchMock.mock.calls[0];
  const body = JSON.parse(opts.body);
  expect(url).toBe('https://hook.example/x');
  expect(Object.keys(body).sort()).toEqual(['email', 'name', 'phoneNumber', 'timestamp']);
  expect(Number.isNaN(Date.parse(body.timestamp))).toBe(false);
});

test('throws when the webhook fails so the form does not show success', async () => {
  vi.stubEnv('PUBLIC_WEBHOOK_URL', 'https://hook.example/x');
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 500 }));
  await expect(submitLead({ name: 'A', phoneNumber: '1', email: 'a@b.c' })).rejects.toThrow('500');
});
