"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { useEffect } from "react";

export function GoogleHelper() {
  useEffect(() => {
    sendGTMEvent({
      event: "conversion",
      value: { send_to: "AW-855505561/iqHECPTS-IQBEJn195cD" },
    });
  });
  return <></>;
}
