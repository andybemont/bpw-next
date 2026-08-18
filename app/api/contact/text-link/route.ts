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
  const date =
    body && typeof body === "object" && "date" in body
      ? String((body as { date: unknown }).date)
      : "";

  const parsedDate = new Date(`${date}T12:00:00`);
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
    Number.isNaN(parsedDate.getTime()) ||
    parsedDate.toISOString().slice(0, 10) !== date
  ) {
    return NextResponse.json(
      { ok: false, message: "Please choose a valid wedding date." },
      { status: 400 },
    );
  }

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

  return NextResponse.json({ ok: true, ...getSmsContactDetails(date) });
}
