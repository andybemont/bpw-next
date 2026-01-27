"use client";

import React, { useEffect, useState } from "react";
import {
  FaCalendarCheck,
  FaEnvelope,
  FaInstagram,
  FaPhone,
} from "react-icons/fa6";
import ContactOverlay from "../contact-overlay/contact-overlay";

export default function Footer({
  h1Text,
  autoOpenContact,
}: {
  h1Text: string;
  autoOpenContact?: boolean;
}) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (autoOpenContact) {
      setIsContactOpen(true);
    }
  }, [autoOpenContact]);

  return (
    <footer className="mt-12 bg-primary-950 text-primary-50">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">{h1Text}</h2>
            <p className="text-sm text-primary-200">
              Wedding photography for Rochester, Buffalo, the Finger Lakes, and
              all of Western New York.
            </p>
            <p className="text-sm text-primary-300">
              Copyright © {new Date().getFullYear()} Bemont Photo
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-200">
              Locations
            </h3>
            <ul className="space-y-2 text-sm list-disc pl-4">
              <li>
                <a href="/wedding-photography/rochester-ny">Rochester, NY</a>
              </li>
              <li>
                <a href="/wedding-photography/buffalo-ny">Buffalo, NY</a>
              </li>
              <li>
                <a href="/wedding-photography/finger-lakes">The Finger Lakes</a>
              </li>
              <li>
                <a href="/wedding-photography/western-ny">Western New York</a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-200">
              Contact
            </h3>
            <address className="not-italic text-sm space-y-2">
              <div>
                <button
                  className="inline-flex items-center gap-2"
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                >
                  <FaCalendarCheck className="text-lg" aria-hidden="true" />
                  <span>Check Availability</span>
                </button>
              </div>
              <div>
                <button
                  className="inline-flex items-center gap-2"
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                >
                  <FaEnvelope className="text-lg" aria-hidden="true" />
                  <span>Get In Touch</span>
                </button>
              </div>
              <div>
                <a
                  className="inline-flex items-center gap-2"
                  href="https://www.instagram.com/thebemontphoto/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-lg" aria-hidden="true" />
                  <span>@thebemontphoto</span>
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>
      <ContactOverlay
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </footer>
  );
}
