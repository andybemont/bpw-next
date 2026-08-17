"use client";

import { trackEvent, type AnalyticsEvent } from "@/app/lib/analytics";
import { useEffect } from "react";

export default function PageAnalytics(props: {
  event: AnalyticsEvent;
  gallerySlug?: string;
}) {
  const { event, gallerySlug } = props;

  useEffect(() => {
    trackEvent(event, gallerySlug ? { gallery: gallerySlug } : undefined);
  }, [event, gallerySlug]);

  return null;
}
