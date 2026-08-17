"use client";

import { useEffect, useState } from "react";
import ContactContent from "../contact-content/contact-content";
import ContactTextContent from "../contact-content/contact-text-content";
import { trackEvent } from "@/app/lib/analytics";

type ContactMode = "email" | "text";

export default function ContactOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [mode, setMode] = useState<ContactMode>("email");
  const [textPanelKey, setTextPanelKey] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setMode("email");
      setTextPanelKey((current) => current + 1);
    }
  }, [isOpen]);

  const switchMode = (nextMode: ContactMode) => {
    if (nextMode === mode) {
      return;
    }
    setMode(nextMode);
    trackEvent("contact_mode_switch", { mode: nextMode });
    if (nextMode === "text") {
      setTextPanelKey((current) => current + 1);
    }
  };

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
          <div className="sticky top-0 z-10 bg-primary-50/95 backdrop-blur border-b border-primary-200 px-6 py-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 space-y-3">
                <div>
                  <h2
                    id="contact-overlay-title"
                    className="text-2xl font-semibold"
                  >
                    Contact & Availability
                  </h2>
                  <p className="text-sm text-primary-700">
                    We try to respond to all inquiries within a day
                  </p>
                </div>

                <div
                  className="inline-flex rounded-full border border-primary-300 p-1"
                  role="tablist"
                  aria-label="Contact method"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={mode === "email"}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                      mode === "email"
                        ? "bg-primary-900 text-primary-50"
                        : "text-primary-800 hover:bg-primary-100"
                    }`}
                    onClick={() => switchMode("email")}
                  >
                    Email
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={mode === "text"}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                      mode === "text"
                        ? "bg-primary-900 text-primary-50"
                        : "text-primary-800 hover:bg-primary-100"
                    }`}
                    onClick={() => switchMode("text")}
                  >
                    Text
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="shrink-0 text-sm uppercase tracking-widest text-primary-700"
                onClick={onClose}
                aria-label="Close contact form"
              >
                Close
              </button>
            </div>
          </div>

          <div className="px-6 py-6">
            {mode === "email" ? (
              <ContactContent />
            ) : (
              <ContactTextContent key={textPanelKey} active={mode === "text"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
