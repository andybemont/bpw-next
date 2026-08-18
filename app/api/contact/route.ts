import { NextResponse } from "next/server";
import {
  contactFormSchema,
  formatContactFieldErrors,
} from "@/app/lib/contact-schema";
import { sendContactEmails, isContactEmailConfigured } from "@/app/lib/send-contact-email";
import { verifyTurnstileToken } from "@/app/lib/turnstile";

const MIN_SUBMIT_MS = 3000;
const MAX_SUBMIT_MS = 1000 * 60 * 60 * 4;

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    undefined
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please check the highlighted fields.",
        fieldErrors: formatContactFieldErrors(parsed.error),
      },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot — pretend success so bots don't adapt.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  if (!isContactEmailConfigured()) {
    console.error("Contact form: RESEND_API_KEY / CONTACT_* env vars missing.");
    return NextResponse.json(
      { ok: false, message: "Contact form is temporarily unavailable." },
      { status: 503 },
    );
  }

  const elapsed = Date.now() - data.formLoadedAt;
  if (elapsed < MIN_SUBMIT_MS || elapsed > MAX_SUBMIT_MS) {
    return NextResponse.json(
      { ok: false, message: "Please try submitting again." },
      { status: 400 },
    );
  }

  const turnstileOk = await verifyTurnstileToken(
    data.turnstileToken,
    getClientIp(request),
  );
  if (!turnstileOk) {
    return NextResponse.json(
      {
        ok: false,
        message: "Verification failed. Please try again.",
        fieldErrors: { turnstileToken: "Please complete the verification check." },
      },
      { status: 400 },
    );
  }

  try {
    await sendContactEmails(data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form send failed:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Something went wrong sending your message. Please try again in a moment or text us from the contact page.",
      },
      { status: 500 },
    );
  }
}
