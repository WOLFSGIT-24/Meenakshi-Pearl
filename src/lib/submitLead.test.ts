import { submitLead } from './submitLead';

test('posts only the form fields plus a timestamp', async () => {
  vi.stubEnv('PUBLIC_WEBHOOK_URL', 'https://hook.example/x');
  const fetchMock = vi.fn().mockResolvedValue({ ok: true });
  vi.stubGlobal('fetch', fetchMock);

  await submitLead({ name: 'Ravi', phoneNumber: '9876543210', email: 'a@b.co' });

  const [url, opts] = fetchMock.mock.calls[0];
  const body = JSON.parse(opts.body);
  expect(url).toBe('https://hook.example/x');
  expect(Object.keys(body).sort()).toEqual(['email', 'name', 'phoneNumber', 'timestamp']);
  expect(Number.isNaN(Date.parse(body.timestamp))).toBe(false);
});

test('throws when the webhook fails so the form does not show success', async () => {
  vi.stubEnv('PUBLIC_WEBHOOK_URL', 'https://hook.example/x');
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 500 }));
  await expect(submitLead({ name: 'Ravi', phoneNumber: '9876543210', email: 'a@b.co' })).rejects.toThrow('500');
});

import { NAME_PATTERN, PHONE_PATTERN, EMAIL_PATTERN } from './submitLead';

// Browsers compile `pattern` with the `v` flag and silently ignore patterns that fail to compile.
const browserMatch = (p: string, v: string) => new RegExp(`^(?:${p})$`, 'v').test(v);

test.each([
  [NAME_PATTERN, ['Ravi Kumar', "D'Souza", 'A. R. Rahman', 'Jo'], ['', ' ', '   ', 'J', '123', 'Ravi1', '<b>x</b>']],
  [PHONE_PATTERN, ['9876543210', '+91 98765 43210', '+919876543210', '91-9876543210', '09876543210', '+1 555 123 4567', '+44 7911 123456'],
    ['', 'abc', '12345', '1234567890', '5876543210', '+91 12345', '98765 4321', '+91 98765 432100']],
  [EMAIL_PATTERN, ['a@b.co', 'first.last+tag@mail.example.in'], ['', 'a@b', 'a b@c.com', '@c.com', 'a@.com', 'a@b.c']],
])('pattern %s accepts good and rejects bad values', (pattern, good, bad) => {
  for (const v of good) expect([v, browserMatch(pattern, v)]).toEqual([v, true]);
  for (const v of bad) expect([v, browserMatch(pattern, v)]).toEqual([v, false]);
});

test('rejects invalid fields without calling the webhook', async () => {
  vi.stubEnv('PUBLIC_WEBHOOK_URL', 'https://hook.example/x');
  const fetchMock = vi.fn();
  vi.stubGlobal('fetch', fetchMock);
  await expect(submitLead({ name: '   ', phoneNumber: 'abc', email: 'a@b' })).rejects.toThrow('Invalid');
  expect(fetchMock).not.toHaveBeenCalled();
});

test('trims values before sending', async () => {
  vi.stubEnv('PUBLIC_WEBHOOK_URL', 'https://hook.example/x');
  const fetchMock = vi.fn().mockResolvedValue({ ok: true });
  vi.stubGlobal('fetch', fetchMock);
  await submitLead({ name: ' Ravi ', phoneNumber: ' 9876543210 ', email: ' a@b.co ' });
  expect(JSON.parse(fetchMock.mock.calls[0][1].body)).toMatchObject({ name: 'Ravi', phoneNumber: '9876543210', email: 'a@b.co' });
});
