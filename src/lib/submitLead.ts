// Sends a form submission to the webhook in PUBLIC_WEBHOOK_URL (.env.local locally, Vercel env var in production).
export async function submitLead(fields: { name: string; phoneNumber: string; email: string }) {
  const url = import.meta.env.PUBLIC_WEBHOOK_URL;
  if (!url) throw new Error('PUBLIC_WEBHOOK_URL is not set');

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...fields, timestamp: new Date().toISOString() }),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
}
