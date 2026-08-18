"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { allHeaderLinks, mobileMenuLinks } from "@/app/lib/header-content";
import { trackEvent } from "@/app/lib/analytics";
import MoreLinksMenu from "./more-links-menu";

const primaryLinks = allHeaderLinks.filter((link) =>
  ["gallery", "who-were-for", "pricing", "team", "faq"].includes(link.tag),
);

export const MenuHeight = "92px";

export default function Header({
  h1Text: _h1Text,
  h2Text: _h2Text,
}: {
  h1Text: string;
  h2Text: string;
}) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-primary-300/55 bg-primary-50/95 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex min-h-[68px] max-w-[90rem] items-center justify-between gap-8 px-5 sm:min-h-[84px] sm:px-8 lg:px-12">
        <Link
          href="/"
          className="shrink-0 font-display text-[clamp(1.55rem,2.4vw,2.35rem)] font-medium leading-none tracking-[-0.035em]"
          aria-label="Bemont Photo home"
        >
          Bemont Photo
        </Link>

        <div className="lg:hidden">
          <MoreLinksMenu links={mobileMenuLinks} />
        </div>

        <div className="hidden items-center gap-7 lg:flex xl:gap-10">
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-6 lg:gap-9">
              {primaryLinks.map((link) => {
                const active =
                  link.url === "/" ? pathname === "/" : pathname.startsWith(link.url);
                return (
                  <li key={link.tag}>
                    <Link
                      href={link.url}
                      className={`flex min-h-11 items-center border-b font-display text-[1.02rem] font-medium transition-colors ${
                        active
                          ? "border-primary-800"
                          : "border-transparent hover:border-primary-300"
                      }`}
                    >
                      {link.tooltip === "Galleries & Inspo" ? "Galleries" : link.tooltip}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Link
            href="/contact"
            onClick={() => trackEvent("availability_cta_click", { source: "header_availability" })}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary-800 px-5 font-display text-[1.02rem] font-medium transition hover:bg-primary-900 hover:text-primary-50"
          >
            Check your date
          </Link>
        </div>
      </div>
    </header>
  );
}
