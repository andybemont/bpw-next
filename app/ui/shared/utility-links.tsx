import Link from "next/link";

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path
        d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path
        d="m4 7 8 6 8-6M5 5h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const utilityLinks = [
  {
    href: "/pricing",
    label: "Pricing",
    icon: <span className="font-display text-xl leading-none">$</span>,
  },
  { href: "/contact", label: "Check Date", icon: <CalendarIcon /> },
  { href: "/contact", label: "Contact", icon: <MailIcon /> },
];

export default function UtilityLinks({
  className = "",
  primaryHref,
  primaryLabel,
}: {
  className?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <nav aria-label="Related and utility links" className={className}>
      <div className="flex flex-wrap items-center justify-start gap-2.5 sm:gap-3">
        {primaryHref && primaryLabel ? (
          <Link
            href={primaryHref}
            className="mr-1 inline-flex min-h-12 items-center justify-center rounded-full bg-primary-900 px-6 py-3 font-display text-base font-medium text-primary-50 transition-colors hover:bg-[#a85235] sm:mr-2"
          >
            {primaryLabel}
          </Link>
        ) : null}
        {utilityLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            title={item.label}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-primary-400/80 text-primary-700 transition-colors hover:border-primary-900 hover:bg-primary-900 hover:text-primary-50"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
}
