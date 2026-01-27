"use client";

import { useState } from "react";
import ContactOverlay from "../contact-overlay/contact-overlay";

export default function CheckAvailabilityCta({
  className = "",
}: {
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`flex justify-center ${className}`.trim()}>
      <button
        type="button"
        className="inline-flex items-center rounded-full border border-primary-900/40 px-5 py-2 text-sm font-semibold text-primary-900 transition hover:border-primary-900 hover:bg-primary-50"
        onClick={() => setIsOpen(true)}
      >
        Check availability
      </button>
      <ContactOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
