"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  AvailabilityStatus,
  getAvailabilityStatus,
} from "@/app/lib/availability";
import { trackEvent } from "@/app/lib/analytics";

type ContactFormValues = {
  website: string;
  date: string;
  name: string;
  email: string;
  phone: string;
  reference: string;
  message: string;
};

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availabilityStatus, setAvailabilityStatus] =
    useState<AvailabilityStatus | null>(null);
  const hasTrackedStart = useRef(false);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { isValid, isDirty },
  } = useForm<ContactFormValues>();

  const onSubmit = async (values: ContactFormValues) => {
    if (values.website) {
      return;
    }

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_ID || "",
        {
          name: values.name,
          phone: values.phone,
          email: values.email,
          message: values.message,
          date: values.date,
          reference: values.reference,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_PUBLIC_KEY || "",
        },
      );
      reset();
      setSubmitted(true);
      trackEvent("contact_form_submit_success");
    } catch {
      setSubmitError(
        "Something went wrong sending your message. Please try again or email us directly.",
      );
      trackEvent("contact_form_submit_error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = () => {
    if (!hasTrackedStart.current) {
      hasTrackedStart.current = true;
      trackEvent("contact_form_start");
    }
    const currentValues = getValues();
    setSubmitted(false);
    setSubmitError(null);
    setAvailabilityStatus(getAvailabilityStatus(currentValues.date));
  };

  return (
    <section className="space-y-6 text-left">
      <form
        onChange={handleChange}
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 text-left"
      >
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="date">
            When&apos;s Your Wedding?
            <span className="ml-1 text-primary-600">*</span>
          </label>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <input
              id="date"
              className="w-full sm:w-[12rem] rounded-md border border-primary-200 bg-white px-3 py-2 text-sm focus:border-primary-900 focus:outline-none"
              type="date"
              required
              {...register("date", { required: true })}
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
          <p className="text-xs text-primary-700 min-h-[1.5rem]">
            {availabilityStatus
              ? (availabilityStatus.note ??
                "We're so sorry! Please get in touch if you have flexibility or have general questions.")
              : "Enter a date to see if we're available."}
          </p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="name">
            Name
            <span className="ml-1 text-primary-600">*</span>
          </label>
          <input
            id="name"
            className="w-full rounded-md border border-primary-200 bg-white px-3 py-2 text-sm focus:border-primary-900 focus:outline-none"
            type="text"
            required
            {...register("name", { required: true })}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="email">
            Email Address
            <span className="ml-1 text-primary-600">*</span>
          </label>
          <input
            id="email"
            className="w-full rounded-md border border-primary-200 bg-white px-3 py-2 text-sm focus:border-primary-900 focus:outline-none"
            type="email"
            required
            {...register("email", { required: true })}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            className="w-full rounded-md border border-primary-200 bg-white px-3 py-2 text-sm focus:border-primary-900 focus:outline-none"
            type="tel"
            {...register("phone")}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="reference">
            How Did You Find Us?
          </label>
          <select
            id="reference"
            className="w-full rounded-md border border-primary-200 bg-white px-3 py-2 text-sm focus:border-primary-900 focus:outline-none"
            {...register("reference")}
          >
            <option value=""></option>
            <option value="Social Media">Social Media</option>
            <option value="Zola">Zola</option>
            <option value="The Knot">The Knot</option>
            <option value="Wedding Wire">Wedding Wire</option>
            <option value="Google/Web Search">Google/Web</option>
            <option value="Word of Mouth">Word of Mouth</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="message">
            Write a message
            <span className="ml-1 text-primary-600">*</span>
          </label>
          <textarea
            id="message"
            className="w-full min-h-[160px] rounded-md border border-primary-200 bg-white px-3 py-2 text-sm focus:border-primary-900 focus:outline-none"
            required
            {...register("message", { required: true })}
          />
        </div>

        {submitError && (
          <p className="text-sm text-red-700" role="alert">
            {submitError}
          </p>
        )}

        <div className="pt-2">
          <button
            type="submit"
            className="bg-primary-900 text-primary-50 rounded-md w-full sm:w-40 h-11 text-base disabled:bg-gray-600"
            disabled={!isValid || isSubmitting || (submitted && !isDirty)}
          >
            {isSubmitting
              ? "Sending..."
              : submitted && !isDirty
                ? "Thank You!"
                : "Send It!"}
          </button>
        </div>
      </form>
    </section>
  );
}
