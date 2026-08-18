"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { trackEvent } from "@/app/lib/analytics";
import ContactTurnstile, {
  type ContactTurnstileHandle,
} from "./contact-turnstile";

type TextState = "verifying" | "ready" | "error";

function formatShortDate(date: string) {
  const parsed = new Date(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return "your date";
  return parsed.toLocaleDateString("en-US", { month: "long", day: "numeric" });
}

export default function ContactTextContent({
  active,
  date,
}: {
  active: boolean;
  date: string;
}) {
  const [textState, setTextState] = useState<TextState>("verifying");
  const [smsHref, setSmsHref] = useState<string | null>(null);
  const [phoneDisplay, setPhoneDisplay] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [turnstileKey, setTurnstileKey] = useState(0);

  const turnstileRef = useRef<ContactTurnstileHandle>(null);
  const hasFetched = useRef(false);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

  const fetchTextLink = useCallback(async (turnstileToken: string) => {
    setTextState("verifying");
    setErrorMessage(null);
    setSmsHref(null);
    setPhoneDisplay(null);

    try {
      const response = await fetch("/api/contact/text-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ turnstileToken, date }),
      });

      const result = (await response.json()) as {
        ok: boolean;
        href?: string;
        phoneDisplay?: string;
        message?: string;
      };

      if (!response.ok || !result.ok || !result.href || !result.phoneDisplay) {
        throw new Error(result.message ?? "verification-failed");
      }

      setSmsHref(result.href);
      setPhoneDisplay(result.phoneDisplay);
      setTextState("ready");
      trackEvent("contact_text_link_unlocked");
    } catch {
      setTextState("error");
      setErrorMessage(
        "We couldn't verify you're human. Please try again in a moment.",
      );
    }
  }, [date]);

  const handleTurnstileReady = useCallback(
    (token: string) => {
      if (hasFetched.current) {
        return;
      }
      hasFetched.current = true;
      trackEvent("contact_text_unlock_start");
      void fetchTextLink(token);
    },
    [fetchTextLink],
  );

  const handleTurnstileError = useCallback(() => {
    setTextState("error");
    setErrorMessage(
      "Verification could not load. Please try again in a moment.",
    );
  }, []);

  const resetTurnstile = useCallback(() => {
    hasFetched.current = false;
    turnstileRef.current?.reset();
    setTurnstileKey((current) => current + 1);
    setTextState("verifying");
    setErrorMessage(null);
    setSmsHref(null);
    setPhoneDisplay(null);
  }, []);

  useEffect(() => {
    if (!active) {
      hasFetched.current = false;
      return;
    }
    if (!turnstileSiteKey) {
      hasFetched.current = true;
      trackEvent("contact_text_unlock_start");
      const timer = window.setTimeout(() => {
        void fetchTextLink("dev-bypass");
      }, 0);
      return () => window.clearTimeout(timer);
    }
  }, [active, fetchTextLink, turnstileSiteKey]);

  useEffect(() => {
    if (!active || textState !== "verifying" || !turnstileSiteKey) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setTextState("error");
      setErrorMessage(
        "Verification is taking too long. Please try again in a moment.",
      );
    }, 20_000);

    return () => window.clearTimeout(timeout);
  }, [active, textState, turnstileSiteKey]);

  if (!active) {
    return null;
  }

  return (
    <section className="text-left">
      {textState === "verifying" && (
        <p className="border-t border-primary-900/10 pt-4 text-sm leading-6 text-primary-700" aria-live="polite">
          Preparing the text option…
        </p>
      )}

      {textState === "error" && (
        <>
          <div
            className="border-l-2 border-[#a85235] bg-[#f2e8df] px-4 py-3 text-sm leading-6 text-primary-800"
            role="alert"
          >
            {errorMessage}
          </div>
          <button
            type="button"
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full border border-primary-900 px-5 text-sm font-medium transition hover:bg-primary-900 hover:text-primary-50"
            onClick={resetTurnstile}
          >
            Try again
          </button>
        </>
      )}

      {textState === "ready" && smsHref && phoneDisplay && (
        <div className="mt-4 border-t border-primary-900/10 pt-4">
          <p className="font-display text-xl font-medium leading-snug md:hidden">
            Prefer to text?{" "}
            <a
              href={smsHref}
              className="editorial-link"
              onClick={() => trackEvent("contact_text_link_click", { date: formatShortDate(date) })}
            >
              {phoneDisplay}
            </a>
          </p>
          <p className="hidden font-display text-xl font-medium leading-snug md:block">
            Prefer to call or text? <span className="whitespace-nowrap">{phoneDisplay}</span>
          </p>
        </div>
      )}

      {turnstileSiteKey ? (
        <ContactTurnstile
          ref={turnstileRef}
          widgetKey={turnstileKey}
          onReady={handleTurnstileReady}
          onError={handleTurnstileError}
        />
      ) : null}
    </section>
  );
}
