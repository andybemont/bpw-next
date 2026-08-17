"use client";

import { initAnalyticsContext } from "@/app/lib/analytics";
import { useEffect } from "react";

export default function AnalyticsBootstrap() {
  useEffect(() => {
    initAnalyticsContext();
  }, []);

  return null;
}
