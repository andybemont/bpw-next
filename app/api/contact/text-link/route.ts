import { NextResponse } from "next/server";
import { getSmsContactDetails } from "@/app/lib/sms-contact-link";
import { verifyTurnstileToken } from "@/app/lib/turnstile";

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
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const turnstileToken =
    body && typeof body === "object" && "turnstileToken" in body
      ? String((body as { turnstileToken: unknown }).turnstileToken)
      : "";

  const turnstileOk = await verifyTurnstileToken(
    turnstileToken,
    getClientIp(request),
  );
  if (!turnstileOk) {
    return NextResponse.json(
      { ok: false, message: "Verification failed." },
      { status: 403 },
    );
  }

  return NextResponse.json({ ok: true, ...getSmsContactDetails() });
}
