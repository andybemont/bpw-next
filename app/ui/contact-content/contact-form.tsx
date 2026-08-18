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
import ContactTextContent from "./contact-text-content";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClassName =
  "w-full rounded-none border-0 border-b border-primary-300 bg-transparent px-0 py-3 text-base text-primary-900 shadow-none transition-colors placeholder:text-primary-400 focus:border-[#a85235] focus:outline-none focus:ring-0";
const labelClassName =
  "block text-[0.67rem] font-medium uppercase tracking-[0.16em] text-primary-600";

const availabilityStyles: Record<AvailabilityStatus["tone"], string> = {
  open: "border-[#87947e]/45 bg-[#e9eee5]",
  ask: "border-[#a85235]/35 bg-[#f2e8df]",
  unavailable: "border-primary-300/70 bg-primary-100/70",
};

const availabilityDotStyles: Record<AvailabilityStatus["tone"], string> = {
  open: "bg-[#53604b]",
  ask: "bg-[#a85235]",
  unavailable: "bg-primary-500",
};

function ReferencePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const openAndFocus = (index: number) => {
    setIsOpen(true);
    window.requestAnimationFrame(() => optionRefs.current[index]?.focus());
  };

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  const selectOption = (option: string) => {
    setValue(option);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const handleOptionKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      optionRefs.current[(index + 1) % REFERENCE_OPTIONS.length]?.focus();
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      optionRefs.current[(index - 1 + REFERENCE_OPTIONS.length) % REFERENCE_OPTIONS.length]?.focus();
    }
    if (event.key === "Home") {
      event.preventDefault();
      optionRefs.current[0]?.focus();
    }
    if (event.key === "End") {
      event.preventDefault();
      optionRefs.current[REFERENCE_OPTIONS.length - 1]?.focus();
    }
    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <input type="hidden" name="reference" value={value} />
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="reference-label reference-value"
        className={`${inputClassName} relative cursor-pointer pr-9 text-left`}
        onClick={() => {
          if (isOpen) setIsOpen(false);
          else openAndFocus(Math.max(0, REFERENCE_OPTIONS.indexOf(value as (typeof REFERENCE_OPTIONS)[number])));
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            const selectedIndex = REFERENCE_OPTIONS.indexOf(value as (typeof REFERENCE_OPTIONS)[number]);
            openAndFocus(selectedIndex >= 0 ? selectedIndex : 0);
          }
          if (event.key === "Escape") setIsOpen(false);
        }}
      >
        <span id="reference-value" className={value ? "text-primary-900" : "text-primary-600"}>
          {value || "Choose one"}
        </span>
        <svg
          viewBox="0 0 12 8"
          fill="none"
          aria-hidden="true"
          className={`pointer-events-none absolute right-1 top-1/2 h-2 w-3 -translate-y-1/2 text-[#a85235] transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M1 1.25 6 6.25 11 1.25" stroke="currentColor" strokeWidth="1.25" />
        </svg>
      </button>

      {isOpen ? (
        <ul
          role="listbox"
          aria-labelledby="reference-label"
          className="absolute left-0 right-0 top-[calc(100%+0.35rem)] z-30 border border-primary-300/70 bg-primary-50 py-1 shadow-[0_18px_45px_rgb(29_33_28/0.16)]"
        >
          {REFERENCE_OPTIONS.map((option, index) => (
            <li key={option} role="presentation">
              <button
                ref={(element) => {
                  optionRefs.current[index] = element;
                }}
                type="button"
                role="option"
                aria-selected={value === option}
                className="flex min-h-11 w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-[#a85235] hover:text-primary-50 focus:bg-[#a85235] focus:text-primary-50 focus:outline-none"
                onClick={() => selectOption(option)}
                onKeyDown={(event) => handleOptionKeyDown(event, index)}
              >
                <span>{option}</span>
                {value === option ? <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" /> : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [availabilityStatus, setAvailabilityStatus] =
    useState<AvailabilityStatus | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);

  const formLoadedAt = useRef<number | null>(null);
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

    if (formState === "success") setFormState("idle");
    setSubmitError(null);
    setFieldErrors({});

    const dateInput = event.currentTarget.elements.namedItem(
      "date",
    ) as HTMLInputElement | null;
    if (dateInput) {
      setSelectedDate(dateInput.value);
      setAvailabilityStatus(getAvailabilityStatus(dateInput.value));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);
    setFieldErrors({});

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

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
      formLoadedAt: formLoadedAt.current ?? Date.now(),
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
        if (result.fieldErrors) setFieldErrors(result.fieldErrors);
        resetTurnstile();
        trackEvent("contact_form_submit_error");
        return;
      }

      setFormState("success");
      form.reset();
      setAvailabilityStatus(null);
      setSelectedDate("");
      resetTurnstile();
      formLoadedAt.current = Date.now();
      hasTrackedStart.current = false;
      trackEvent("contact_form_submit_success");
    } catch {
      setFormState("error");
      setSubmitError(
        "Network error—please check your connection and try again, or text us instead.",
      );
      resetTurnstile();
      trackEvent("contact_form_submit_error");
    }
  };

  if (formState === "success") {
    return (
      <section className="border-y border-[#87947e]/45 bg-[#e9eee5] px-5 py-10 text-left sm:px-8 sm:py-14" role="status">
        <p className="mb-4 text-[0.67rem] font-medium uppercase tracking-[0.18em] text-[#53604b]">
          Message received
        </p>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-none tracking-[-0.035em]">
          We have it.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-primary-700">
          We try to respond within a day. A confirmation email should arrive shortly; check spam if it decides to be difficult.
        </p>
        <button
          type="button"
          className="editorial-link mt-8 text-sm font-medium"
          onClick={() => setFormState("idle")}
        >
          Send another message
        </button>
      </section>
    );
  }

  const hasFieldErrors = Object.keys(fieldErrors).length > 0;

  return (
    <form
      id="inquiry"
      onChange={handleFieldChange}
      onSubmit={handleSubmit}
      className="text-left"
      noValidate
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {(submitError || hasFieldErrors) && (
        <div className="mb-6 border-l-2 border-[#a85235] bg-[#f2e8df] px-5 py-4 text-sm leading-6 text-primary-800" role="alert">
          {submitError ?? "Please fix the highlighted fields below and try again."}
        </div>
      )}

      <section className="border-t border-primary-300/60 py-5 sm:py-7">
        <label id="date-label" className={labelClassName} htmlFor="date">
          Your wedding date <span className="text-[#a85235]">*</span>
        </label>
        <input
          id="date"
          name="date"
          className={`${inputClassName} mt-2 max-w-sm font-display text-xl sm:text-2xl ${fieldErrors.date ? "border-red-600" : ""}`}
          type="date"
          required
          autoComplete="off"
          aria-invalid={Boolean(fieldErrors.date)}
          aria-describedby="date-feedback"
        />

        <div
          id="date-feedback"
          className={fieldErrors.date || availabilityStatus ? "mt-4" : ""}
        >
          {fieldErrors.date ? (
            <p className="text-sm text-red-700" role="alert">{fieldErrors.date}</p>
          ) : availabilityStatus ? (
            <div
              className={`border px-4 py-4 sm:px-5 sm:py-5 ${availabilityStyles[availabilityStatus.tone]}`}
              role="status"
              aria-live="polite"
            >
              <p className="flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-primary-600">
                <span className={`h-2 w-2 rounded-full ${availabilityDotStyles[availabilityStatus.tone]}`} aria-hidden="true" />
                Availability
              </p>
              <p className="mt-2 font-display text-2xl font-medium leading-tight sm:text-3xl">
                {availabilityStatus.label}
              </p>
              {availabilityStatus.note ? (
                <p className="mt-2 max-w-xl text-sm leading-6 text-primary-700">{availabilityStatus.note}</p>
              ) : null}
              {selectedDate && availabilityStatus.tone !== "unavailable" ? (
                <ContactTextContent key={selectedDate} active date={selectedDate} />
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      <div className="grid gap-x-10 gap-y-6 py-7 sm:grid-cols-2 sm:py-9">
        <div>
          <label className={labelClassName} htmlFor="name">Name <span className="text-[#a85235]">*</span></label>
          <input
            id="name"
            name="name"
            className={`${inputClassName} ${fieldErrors.name ? "border-red-600" : ""}`}
            type="text"
            required
            autoComplete="name"
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
          />
          {fieldErrors.name ? <p id="name-error" className="mt-2 text-sm text-red-700" role="alert">{fieldErrors.name}</p> : null}
        </div>

        <div>
          <label className={labelClassName} htmlFor="email">Email address <span className="text-[#a85235]">*</span></label>
          <input
            id="email"
            name="email"
            className={`${inputClassName} ${fieldErrors.email ? "border-red-600" : ""}`}
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email ? <p id="email-error" className="mt-2 text-sm text-red-700" role="alert">{fieldErrors.email}</p> : null}
        </div>

        <div>
          <label className={labelClassName} htmlFor="phone">Phone <span className="normal-case tracking-normal text-primary-500">(optional)</span></label>
          <input
            id="phone"
            name="phone"
            className={`${inputClassName} ${fieldErrors.phone ? "border-red-600" : ""}`}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(fieldErrors.phone)}
          />
          {fieldErrors.phone ? <p className="mt-2 text-sm text-red-700" role="alert">{fieldErrors.phone}</p> : null}
        </div>

        <div>
          <p id="reference-label" className={labelClassName}>How did you find us?</p>
          <ReferencePicker />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClassName} htmlFor="message">Tell us what you’re planning <span className="text-[#a85235]">*</span></label>
          <textarea
            id="message"
            name="message"
            className="mt-3 min-h-36 w-full resize-y rounded-none border border-primary-300 bg-[#fbf9f4] px-4 py-4 text-base leading-7 shadow-none transition-colors focus:border-[#a85235] focus:outline-none focus:ring-0"
            required
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "message-error" : undefined}
          />
          {fieldErrors.message ? <p id="message-error" className="mt-2 text-sm text-red-700" role="alert">{fieldErrors.message}</p> : null}
        </div>
      </div>

      {turnstileSiteKey ? (
        <ContactTurnstile ref={turnstileRef} widgetKey={turnstileKey} />
      ) : process.env.NODE_ENV !== "production" ? (
        <p className="mb-5 text-xs text-primary-500">Spam protection is disabled in this local preview.</p>
      ) : null}

      <div className="border-t border-primary-300/60 pt-5 pb-[env(safe-area-inset-bottom)]">
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-primary-900 bg-primary-900 px-8 py-3 font-display text-lg font-medium text-primary-50 transition hover:bg-transparent hover:text-primary-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          disabled={formState === "submitting"}
        >
          {formState === "submitting" ? "Sending…" : "Send inquiry"}
        </button>
      </div>
    </form>
  );
}
