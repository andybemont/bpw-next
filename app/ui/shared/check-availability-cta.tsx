"use client";

import { useContact } from "../contact/contact-provider";

export default function CheckAvailabilityCta({
  className = "",
  source = "inline_cta",
  fullWidthOnMobile = false,
}: {
  className?: string;
  source?: string;
  fullWidthOnMobile?: boolean;
}) {
  const { openContact } = useContact();

  return (
    <div className={`flex justify-center ${className}`.trim()}>
      <button
        type="button"
        className={`inline-flex min-h-[44px] items-center justify-center rounded-full border border-primary-900/40 px-6 py-2.5 text-sm font-semibold text-primary-900 transition hover:border-primary-900 hover:bg-primary-50 ${
          fullWidthOnMobile ? "w-full sm:w-auto" : ""
        }`}
        onClick={() => openContact(source)}
      >
        Check availability
      </button>
    </div>
  );
}
