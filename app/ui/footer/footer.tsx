import Link from "next/link";
import businessInfo from "@/app/lib/business-info";

const locations = [
  ["Rochester", "/wedding-photography/rochester-ny"],
  ["Buffalo", "/wedding-photography/buffalo-ny"],
  ["The Finger Lakes", "/wedding-photography/finger-lakes"],
] as const;

const navigation = [
  ["FAQ", "/faq"],
  ["Who We’re For", "/who-were-for"],
  ["Pricing", "/pricing"],
  ["The Team", "/team"],
  ["Galleries", "/gallery"],
  ["Contact", "/contact"],
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-primary-300/60 bg-primary-50 text-primary-900">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 sm:py-10">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="font-display text-2xl font-medium">
            Bemont Photo
          </Link>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-primary-700">
              {navigation.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="transition hover:text-primary-950">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-7 flex flex-col gap-4 border-t border-primary-300/50 pt-5 text-xs text-primary-600 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p>© {new Date().getFullYear()} Bemont Photo</p>
            <nav aria-label="Locations">
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {locations.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="transition hover:text-primary-950">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex gap-5">
            <a
              href={businessInfo.socialProfiles.instagram}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-primary-950"
            >
              Instagram
            </a>
            <Link href="/privacy" className="transition hover:text-primary-950">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
