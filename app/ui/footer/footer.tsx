"use client";

import Link from "next/link";
import businessInfo from "@/app/lib/business-info";
import { trackEvent } from "@/app/lib/analytics";

const locations = [
  ["Rochester", "/wedding-photography/rochester-ny"],
  ["Buffalo", "/wedding-photography/buffalo-ny"],
  ["The Finger Lakes", "/wedding-photography/finger-lakes"],
] as const;

export default function Footer({ h1Text: _h1Text }: { h1Text: string }) {
  return (
    <footer className="bg-primary-950 text-primary-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-16 border-b border-primary-50/20 pb-16 sm:pb-24 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-primary-300">
              Bemont Photo · Rochester, New York
            </p>
            <h2 className="max-w-4xl font-display text-[clamp(2.7rem,5.6vw,6.2rem)] font-medium leading-[0.98] tracking-[-0.04em] text-balance">
              Keep the day. Lose the photo-shoot feeling.
            </h2>
          </div>
          <Link
            href="/contact"
            onClick={() => trackEvent("availability_cta_click", { source: "footer_availability" })}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-primary-50 px-7 py-3 font-display text-lg font-medium transition hover:bg-primary-50 hover:text-primary-950 sm:w-fit lg:justify-self-end"
          >
            Check your date
          </Link>
        </div>

        <div className="grid gap-12 pt-12 text-sm text-primary-200 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:gap-16">
          <div>
            <Link href="/" className="font-display text-2xl font-medium text-primary-50">
              Bemont Photo
            </Link>
            <p className="mt-4 max-w-sm leading-6">
              Candid, colorful wedding photography throughout Western New York.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-primary-400">
              Explore
            </p>
            <ul className="space-y-2.5">
              <li><Link href="/gallery" className="hover:text-primary-50">Galleries</Link></li>
              <li><Link href="/who-were-for" className="hover:text-primary-50">Our approach</Link></li>
              <li><Link href="/pricing" className="hover:text-primary-50">Pricing</Link></li>
              <li><Link href="/team" className="hover:text-primary-50">The team</Link></li>
              <li><Link href="/faq" className="hover:text-primary-50">FAQ</Link></li>
            </ul>
          </nav>

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-primary-400">
              Find us
            </p>
            <ul className="space-y-2.5">
              {locations.map(([label, href]) => (
                <li key={href}><Link href={href} className="hover:text-primary-50">{label}</Link></li>
              ))}
              <li>
                <a href={businessInfo.socialProfiles.instagram} target="_blank" rel="noreferrer" className="hover:text-primary-50">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-primary-50/10 pt-6 text-xs text-primary-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bemont Photo</p>
          <div className="flex gap-5">
            <Link href="/contact" onClick={() => trackEvent("availability_cta_click", { source: "footer_contact" })} className="hover:text-primary-50">
              Get in touch
            </Link>
            <Link href="/privacy" className="hover:text-primary-50">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
