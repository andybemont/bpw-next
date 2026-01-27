"use client";

import ContactContent from "../contact-content/contact-content";

export default function ContactOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
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
        >
          <div className="sticky top-0 bg-primary-50/95 backdrop-blur border-b border-primary-200 px-6 py-4 flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Contact & Availability</h2>
              <p className="text-sm text-primary-700">
                We try to respond to all inquiries within a day
              </p>
            </div>
            <button
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
