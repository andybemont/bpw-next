"use client";

import { useEffect, useRef, useState } from "react";
import {
  AvailabilityStatus,
  getAvailabilityStatus,
} from "@/app/lib/availability";
import { REFERENCE_OPTIONS } from "@/app/lib/contact-schema";
import { getAnalyticsContext, trackEvent } from "@/app/lib/analytics";
import ContactTurnstile, {
  type ContactTurnstileHandle,
} from "./contact-turnstile";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClassName =
  "w-full rounded-md border border-primary-200 bg-white px-3 py-2.5 text-base focus:border-primary-900 focus:outline-none focus:ring-1 focus:ring-primary-900/20";

export default function ContactContent() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [availabilityStatus, setAvailabilityStatus] =
    useState<AvailabilityStatus | null>(null);
  const [turnstileKey, setTurnstileKey] = useState(0);

  const formLoadedAt = useRef(Date.now());
  const hasTrackedStart = useRef(false);
  const turnstileRef = useRef<ContactTurnstileHandle>(null);

  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

  useEffect(() => {
    formLoadedAt.current = Date.now();
  }, []);

  const resetTurnstile = () => {
    turnstileRef.current?.reset();
    setTurnstileKey((current) => current + 1);
  };

  const handleFieldChange = (event: React.FormEvent<HTMLFormElement>) => {
    if (!hasTrackedStart.current) {
      hasTrackedStart.current = true;
      trackEvent("contact_form_start");
    }

    if (formState === "success") {
      setFormState("idle");
    }
    setSubmitError(null);
    setFieldErrors({});

    const form = event.currentTarget;
    const dateInput = form.elements.namedItem("date") as HTMLInputElement | null;
    if (dateInput) {
      setAvailabilityStatus(getAvailabilityStatus(dateInput.value));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);
    setFieldErrors({});

    const form = event.currentTarget;
    if (!form.reportValidity()) {
      return;
    }

    setFormState("submitting");

    let turnstileToken = "dev-bypass";
    if (turnstileSiteKey) {
      try {
        turnstileToken = await turnstileRef.current!.getToken();
      } catch {
        setFormState("error");
        setSubmitError(
          "We couldn't verify you're human. Please try again in a moment.",
        );
        resetTurnstile();
        trackEvent("contact_form_submit_error");
        return;
      }
    }

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      date: String(formData.get("date") ?? ""),
      reference: String(formData.get("reference") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
      turnstileToken,
      formLoadedAt: formLoadedAt.current,
      analyticsContext: getAnalyticsContext() ?? undefined,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        ok: boolean;
        message?: string;
        fieldErrors?: Record<string, string>;
      };

      if (!response.ok || !result.ok) {
        setFormState("error");
        setSubmitError(
          result.message ??
            "Something went wrong sending your message. Please try again.",
        );
        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors);
        }
        resetTurnstile();
        trackEvent("contact_form_submit_error");
        return;
      }

      setFormState("success");
      form.reset();
      setAvailabilityStatus(null);
      resetTurnstile();
      formLoadedAt.current = Date.now();
      hasTrackedStart.current = false;
      trackEvent("contact_form_submit_success");
    } catch {
      setFormState("error");
      setSubmitError(
        "Network error — please check your connection and try again, or switch to the Text tab.",
      );
      resetTurnstile();
      trackEvent("contact_form_submit_error");
    }
  };

  if (formState === "success") {
    return (
      <section className="space-y-4 text-left">
        <div
          className="rounded-lg border border-green-700/30 bg-green-50 px-4 py-5"
          role="status"
        >
          <p className="text-lg font-semibold text-primary-900">
            Thank you — we got your message!
          </p>
          <p className="mt-2 text-base text-primary-800">
            We try to respond within a day. You should also receive a quick
            confirmation email (check spam if you don&apos;t see it).
          </p>
        </div>
        <button
          type="button"
          className="text-sm font-medium text-primary-700 underline underline-offset-4"
          onClick={() => setFormState("idle")}
        >
          Send another message
        </button>
      </section>
    );
  }

  const hasFieldErrors = Object.keys(fieldErrors).length > 0;

  return (
    <section className="space-y-6 text-left">
      <form
        onChange={handleFieldChange}
        onSubmit={handleSubmit}
        className="space-y-4 text-left"
        noValidate
      >
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {(submitError || hasFieldErrors) && (
          <div
            className="rounded-lg border border-red-700/30 bg-red-50 px-4 py-3 text-sm text-red-800"
            role="alert"
          >
            {submitError ??
              "Please fix the highlighted fields below and try again."}
          </div>
        )}

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="date">
            When&apos;s Your Wedding?
            <span className="ml-1 text-primary-600" aria-hidden="true">
              *
            </span>
          </label>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <input
              id="date"
              name="date"
              className={`${inputClassName} sm:w-[12rem] ${fieldErrors.date ? "border-red-500" : ""}`}
              type="date"
              required
              autoComplete="off"
              aria-invalid={Boolean(fieldErrors.date)}
              aria-describedby="date-hint"
            />
            {availabilityStatus && (
              <span className="text-xs font-medium">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-primary-950 ${availabilityStatus.colorClass}`}
                >
                  {availabilityStatus.label}
                </span>
              </span>
            )}
          </div>
          <p
            id="date-hint"
            className={`text-sm min-h-[1.5rem] ${fieldErrors.date ? "text-red-700" : "text-primary-700"}`}
          >
            {fieldErrors.date ??
              (availabilityStatus
                ? (availabilityStatus.note ??
                  "We're so sorry! Please get in touch if you have flexibility or have general questions.")
                : "Enter a date to see if we're available.")}
          </p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="name">
            Name
            <span className="ml-1 text-primary-600" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="name"
            name="name"
            className={`${inputClassName} ${fieldErrors.name ? "border-red-500" : ""}`}
            type="text"
            required
            autoComplete="name"
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
          />
          {fieldErrors.name && (
            <p id="name-error" className="text-sm text-red-700" role="alert">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="email">
            Email Address
            <span className="ml-1 text-primary-600" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="email"
            name="email"
            className={`${inputClassName} ${fieldErrors.email ? "border-red-500" : ""}`}
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email && (
            <p id="email-error" className="text-sm text-red-700" role="alert">
              {fieldErrors.email}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="phone">
            Phone <span className="font-normal text-primary-600">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            className={`${inputClassName} ${fieldErrors.phone ? "border-red-500" : ""}`}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(fieldErrors.phone)}
          />
          {fieldErrors.phone && (
            <p className="text-sm text-red-700" role="alert">
              {fieldErrors.phone}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="reference">
            How Did You Find Us?
          </label>
          <select
            id="reference"
            name="reference"
            className={inputClassName}
            defaultValue=""
          >
            <option value=""></option>
            {REFERENCE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="message">
            Write a message
            <span className="ml-1 text-primary-600" aria-hidden="true">
              *
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            className={`${inputClassName} min-h-[160px] resize-y ${fieldErrors.message ? "border-red-500" : ""}`}
            required
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "message-error" : undefined}
          />
          {fieldErrors.message && (
            <p id="message-error" className="text-sm text-red-700" role="alert">
              {fieldErrors.message}
            </p>
          )}
        </div>

        {turnstileSiteKey ? (
          <ContactTurnstile ref={turnstileRef} widgetKey={turnstileKey} />
        ) : process.env.NODE_ENV !== "production" ? (
          <p className="text-xs text-primary-600">
            Turnstile disabled in local dev (set NEXT_PUBLIC_TURNSTILE_SITE_KEY
            to enable).
          </p>
        ) : null}

        <div className="pt-2 pb-[env(safe-area-inset-bottom)]">
          <button
            type="submit"
            className="bg-primary-900 text-primary-50 rounded-md w-full sm:w-44 min-h-[44px] text-base font-medium disabled:cursor-not-allowed disabled:opacity-60"
            disabled={formState === "submitting"}
          >
            {formState === "submitting" ? "Sending…" : "Send It!"}
          </button>
        </div>
      </form>
    </section>
  );
}
