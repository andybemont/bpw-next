import businessInfo from "./business-info";

const SMS_BODY = "Hi! We're interested in Bemont Photo for our wedding.";

function formatSmsDate(dateString?: string) {
  if (!dateString || !/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return null;
  const parsed = new Date(`${dateString}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/** Server-only — import from API routes, not client components. */
export function buildSmsContactHref(dateString?: string) {
  const date = formatSmsDate(dateString);
  const body = date ? `${SMS_BODY} Our date is ${date}.` : SMS_BODY;
  return `${businessInfo.smsTel}?body=${encodeURIComponent(body)}`;
}

export function getSmsContactDetails(dateString?: string) {
  return {
    href: buildSmsContactHref(dateString),
    phoneDisplay: businessInfo.phoneDisplay,
  };
}
