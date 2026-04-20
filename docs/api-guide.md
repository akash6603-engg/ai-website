# API Integration Guide

## Contact Form Backend (Pending)

The contact form in `src/components/Contact.tsx` currently uses a stub `handleSubmit`. Replace it with one of:

### Option A — Resend (recommended)

1. Create account at resend.com, get API key
2. Create `src/app/api/contact/route.ts`:

```ts
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  await resend.emails.send({
    from: "noreply@yourdomain.com",
    to: "akash.anande66@gmail.com",
    subject: `New enquiry from ${body.name}`,
    text: JSON.stringify(body, null, 2),
  });
  return NextResponse.json({ ok: true });
}
```

3. Add `RESEND_API_KEY=re_xxx` to `.env.local`
4. Update `handleSubmit` in Contact.tsx to `fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })`

### Option B — Formspree

Replace the form `onSubmit` with a direct POST to your Formspree endpoint. No API route needed.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | If using Resend | Email sending API key |
