import businessInfo from "./business-info";

const SMS_BODY =
  "Hi! We're interested in Bemont Photo for our wedding. Our date is ";

/** Server-only — import from API routes, not client components. */
export function buildSmsContactHref() {
  return `${businessInfo.smsTel}?body=${encodeURIComponent(SMS_BODY)}`;
}

export function getSmsContactDetails() {
  return {
    href: buildSmsContactHref(),
    phoneDisplay: businessInfo.phoneDisplay,
  };
}
