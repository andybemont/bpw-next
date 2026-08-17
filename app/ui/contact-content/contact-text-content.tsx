"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useCallback, useEffect, useRef, useState } from "react";
import { trackEvent } from "@/app/lib/analytics";

type TextState = "verifying" | "ready" | "error";

export default function ContactTextContent({ active }: { active: boolean }) {
  const [textState, setTextState] = useState<TextState>("verifying");
  const [smsHref, setSmsHref] = useState<string | null>(null);
  const [phoneDisplay, setPhoneDisplay] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [turnstileKey, setTurnstileKey] = useState(0);

  const turnstileRef = useRef<TurnstileInstance>(null);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

  const resetTurnstile = useCallback(() => {
    turnstileRef.current?.reset();
    setTurnstileKey((current) => current + 1);
    setTextState("verifying");
    setErrorMessage(null);
    setSmsHref(null);
    setPhoneDisplay(null);
  }, []);

  const fetchTextLink = useCallback(async (turnstileToken: string) => {
    setTextState("verifying");
    setErrorMessage(null);
    setSmsHref(null);
    setPhoneDisplay(null);

    try {
      const response = await fetch("/api/contact/text-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ turnstileToken }),
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
  }, []);

  const handleTurnstileSuccess = useCallback(
    (token: string) => {
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

  const handleWidgetLoad = useCallback(() => {
    turnstileRef.current?.execute();
  }, []);

  useEffect(() => {
    if (!active) {
      return;
    }
    if (!turnstileSiteKey) {
      trackEvent("contact_text_unlock_start");
      void fetchTextLink("dev-bypass");
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
    <section className="space-y-4 text-left">
      {textState === "verifying" && (
        <p className="text-base text-primary-800" aria-live="polite">
          Running a quick verification check…
        </p>
      )}

      {textState === "error" && (
        <>
          <div
            className="rounded-lg border border-red-700/30 bg-red-50 px-4 py-3 text-sm text-red-800"
            role="alert"
          >
            {errorMessage}
          </div>
          <button
            type="button"
            className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-primary-900 px-5 text-base font-medium text-primary-50"
            onClick={resetTurnstile}
          >
            Try again
          </button>
        </>
      )}

      {textState === "ready" && smsHref && phoneDisplay && (
        <>
          <a
            href={smsHref}
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-md bg-primary-900 px-5 text-base font-medium text-primary-50 sm:w-auto"
            onClick={() => trackEvent("contact_text_link_click")}
          >
            {phoneDisplay}
          </a>
          <p className="text-sm text-primary-700">
            We try to respond to texts within a day.
          </p>
        </>
      )}

      {turnstileSiteKey ? (
        <div className="sr-only" aria-hidden="true">
          <Turnstile
            key={turnstileKey}
            ref={turnstileRef}
            siteKey={turnstileSiteKey}
            onWidgetLoad={handleWidgetLoad}
            onSuccess={handleTurnstileSuccess}
            onError={handleTurnstileError}
            onTimeout={handleTurnstileError}
            onExpire={handleTurnstileError}
            options={{
              size: "invisible",
              execution: "execute",
            }}
          />
        </div>
      ) : null}
    </section>
  );
}
