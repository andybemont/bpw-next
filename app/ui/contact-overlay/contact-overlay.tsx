"use client";

import { useEffect } from "react";
import ContactContent from "../contact-content/contact-content";
import businessInfo from "@/app/lib/business-info";

const smsHref = `${businessInfo.smsTel}?body=${encodeURIComponent(
  "Hi! We're interested in Bemont Photo for our wedding. Our date is ",
)}`;

export default function ContactOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0" onClick={onClose}>
        <div
          className="absolute right-0 top-0 h-full w-full sm:w-[72vw] lg:w-[60vw] bg-primary-50 text-primary-900 shadow-2xl overflow-y-auto"
          onClick={(event) => event.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-overlay-title"
        >
          <div className="sticky top-0 bg-primary-50/95 backdrop-blur border-b border-primary-200 px-6 py-4 flex items-start justify-between">
            <div>
              <h2 id="contact-overlay-title" className="text-2xl font-semibold">
                Contact & Availability
              </h2>
              <p className="text-sm text-primary-700">
                We try to respond to all inquiries within a day
              </p>
              <p className="mt-2 text-sm text-primary-700">
                Prefer to text?{" "}
                <a
                  href={smsHref}
                  className="font-medium underline decoration-primary-300/80 underline-offset-4"
                >
                  Send us a message
                </a>
              </p>
            </div>
            <button
              type="button"
              className="text-sm uppercase tracking-widest text-primary-700"
              onClick={onClose}
              aria-label="Close contact form"
            >
              Close
            </button>
          </div>
          <div className="px-6 py-6">
            <ContactContent />
          </div>
        </div>
      </div>
    </div>
  );
}
