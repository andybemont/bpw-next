"use client";

import { track } from "@vercel/analytics";
import { sendGTMEvent } from "@next/third-parties/google";

const SESSION_KEY = "bpw_analytics_context";

export type AnalyticsEvent =
  | "pricing_view"
  | "availability_cta_click"
  | "contact_form_view"
  | "contact_form_start"
  | "contact_form_submit_success"
  | "contact_form_submit_error"
  | "contact_mode_switch"
  | "contact_text_unlock_start"
  | "contact_text_link_unlocked"
  | "contact_text_link_click"
  | "gallery_index_view"
  | "gallery_view"
  | "full_wedding_link_click";

type AnalyticsContext = {
  landingPage: string;
  referrer: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  firstVisitAt: string;
};

export function getAnalyticsContext(): AnalyticsContext | null {
  return readContext();
}

function readContext(): AnalyticsContext | null {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as AnalyticsContext) : null;
  } catch {
    return null;
  }
}

export function initAnalyticsContext() {
  if (typeof window === "undefined" || readContext()) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const context: AnalyticsContext = {
    landingPage: window.location.pathname,
    referrer: document.referrer || "",
    utmSource: params.get("utm_source") || undefined,
    utmMedium: params.get("utm_medium") || undefined,
    utmCampaign: params.get("utm_campaign") || undefined,
    utmContent: params.get("utm_content") || undefined,
    utmTerm: params.get("utm_term") || undefined,
    firstVisitAt: new Date().toISOString(),
  };

  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(context));
  } catch {
    // Storage may be unavailable in private mode.
  }
}

export function trackEvent(
  event: AnalyticsEvent,
  properties: Record<string, string | number | boolean | undefined> = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  const context = readContext();
  const payload = {
    page: window.location.pathname,
    ...context,
    ...properties,
  };

  try {
    track(event, payload);
  } catch {
    // Analytics must never block UX.
  }

  try {
    sendGTMEvent({ event, ...payload });
  } catch {
    // GTM may be blocked by consent or ad blockers.
  }
}
