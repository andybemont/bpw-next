"use client";

import { useContact } from "../contact/contact-provider";

export default function CheckAvailabilityCta({
  className = "",
  source = "inline_cta",
}: {
  className?: string;
  source?: string;
}) {
  const { openContact } = useContact();

  return (
    <div className={`flex justify-center ${className}`.trim()}>
      <button
        type="button"
        className="inline-flex items-center rounded-full border border-primary-900/40 px-5 py-2 text-sm font-semibold text-primary-900 transition hover:border-primary-900 hover:bg-primary-50"
        onClick={() => openContact(source)}
      >
        Check availability
      </button>
    </div>
  );
}
