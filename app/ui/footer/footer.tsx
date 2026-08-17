"use client";

import React from "react";
import { useContact } from "../contact/contact-provider";

export default function Footer({ h1Text }: { h1Text: string }) {
  const { openContact } = useContact();

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
                  onClick={openContact}
                >
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <span>Check Availability</span>
                </button>
              </div>
              <div>
                <button
                  className="inline-flex items-center gap-2"
                  type="button"
                  onClick={openContact}
                >
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
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
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                  <span>@thebemontphoto</span>
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
