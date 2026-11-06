// Field rules: used as HTML `pattern` attributes in both forms and re-checked before sending.
export const NAME_PATTERN = "[A-Za-z][A-Za-z .']{1,59}";
// Indian mobile (optional +91/91/0 prefix) or any other number written with a + country code.
export const PHONE_PATTERN = "(\\+?91[ \\-]?|0)?[6-9][0-9]{4}[ \\-]?[0-9]{5}|\\+(?!91)[1-9][0-9 \\-]{7,16}";
export const EMAIL_PATTERN = "[^@\\s]+@[^@\\s]+\\.[A-Za-z]{2,}";

const valid = (pattern: string, value: string) => new RegExp(`^(?:${pattern})$`, 'u').test(value);

// Sends a form submission to the webhook in PUBLIC_WEBHOOK_URL (.env.local locally, Vercel env var in production).
export async function submitLead(fields: { name: string; phoneNumber: string; email: string }) {
  const name = fields.name.trim();
  const phoneNumber = fields.phoneNumber.trim();
  const email = fields.email.trim();
  if (!valid(NAME_PATTERN, name) || !valid(PHONE_PATTERN, phoneNumber) || !valid(EMAIL_PATTERN, email)) {
    throw new Error('Invalid form fields');
  }

  const url = import.meta.env.PUBLIC_WEBHOOK_URL;
  if (!url) throw new Error('PUBLIC_WEBHOOK_URL is not set');

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, phoneNumber, email, timestamp: new Date().toISOString() }),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
}
