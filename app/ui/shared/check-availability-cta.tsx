"use client";

import Link from "next/link";
import { trackEvent } from "@/app/lib/analytics";

export default function CheckAvailabilityCta({
  className = "",
  source = "inline_cta",
  fullWidthOnMobile = false,
}: {
  className?: string;
  source?: string;
  fullWidthOnMobile?: boolean;
}) {
  return (
    <div className={`flex justify-center ${className}`.trim()}>
      <Link
        href="/contact"
        className={`inline-flex min-h-[48px] items-center justify-center rounded-full border border-primary-900 px-7 py-3 font-display text-base font-medium text-primary-900 transition hover:bg-primary-900 hover:text-primary-50 ${
          fullWidthOnMobile ? "w-full sm:w-auto" : ""
        }`}
        onClick={() => trackEvent("availability_cta_click", { source })}
      >
        Check availability
      </Link>
    </div>
  );
}
