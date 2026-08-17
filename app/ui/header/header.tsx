"use client";

import React, { useMemo } from "react";
import { allHeaderLinks } from "@/app/lib/header-content";
import TextHeaderLink from "./text-header-link";
import MoreLinksMenu from "./more-links-menu";
import { useContact } from "../contact/contact-provider";
import { usePathname } from "next/navigation";

export const MenuHeight = "128px";

export default function Header({
  h1Text,
  h2Text,
}: {
  h1Text: string;
  h2Text: string;
}) {
  const hoverEffect = "transition-all hover:border-primary-950";
  const { openContact } = useContact();
  const pathname = usePathname();

  const isActiveLink = useMemo(() => {
    return (url: string) => {
      if (url === "/") {
        return pathname === "/" || pathname.startsWith("/wedding-photography");
      }
      return pathname.startsWith(url);
    };
  }, [pathname]);

  return (
    <header>
      <div className="fixed inset-x-0 top-0 min-h-[70px] bg-primary-50 md:bg-primary-50/70 z-10 text-primary-900 border-b border-primary-950 md:border-b-0">
        <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6">
          <div id="everythingLeftOfIcon" className="w-full py-2">
            <div className="relative mx-auto flex w-full flex-col items-center md:w-fit">
              <div className="text-center">
                <div className="flex items-center justify-center text-sm font-bold md:text-2xl">
                  {h1Text}
                </div>
                {h2Text ? (
                  <p className="mt-0.5 text-xs text-primary-700 md:text-sm">
                    {h2Text}
                  </p>
                ) : null}
              </div>
              <nav className="w-full">
                <div className="flex justify-center md:hidden">
                  <MoreLinksMenu
                    links={allHeaderLinks.filter(
                      (link) =>
                        !["overview", "faq", "pricing", "contact"].includes(
                          link.tag,
                        ),
                    )}
                  />
                </div>
                <ul
                  id="bottomRowWithIcons"
                  className="hidden md:flex w-full flex-row items-center justify-between gap-4"
                >
                  {allHeaderLinks
                    .filter((link) =>
                      ["overview", "faq", "pricing"].includes(link.tag),
                    )
                    .map((link) => {
                      const isActive = isActiveLink(link.url);
                      return (
                        <li
                          key={link.tag}
                          className={`text-center border-b-2 ${
                            isActive
                              ? "border-primary-950"
                              : "border-transparent"
                          } ${isActive ? "" : hoverEffect}`}
                        >
                          <TextHeaderLink link={link} />
                        </li>
                      );
                    })}
                  <li
                    key="menu"
                    className={`text-center border-b-2 border-transparent ${hoverEffect} pb-0`}
                  >
                    <MoreLinksMenu
                      links={allHeaderLinks.filter(
                        (link) =>
                          !["overview", "faq", "pricing", "contact"].includes(
                            link.tag,
                          ),
                      )}
                    />
                  </li>
                </ul>
              </nav>
              <div className="absolute inset-y-0 -left-[72px] flex items-center">
                <button
                  type="button"
                  title="Get In Touch"
                  aria-label="Get In Touch"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-900/30 text-primary-900 transition hover:border-primary-900 hover:bg-primary-50"
                  onClick={openContact}
                >
                  <svg
                    className="h-4 w-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                </button>
              </div>
              <div className="absolute inset-y-0 -right-[72px] flex items-center">
                <button
                  type="button"
                  title="Check Availability"
                  aria-label="Check Availability"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-900/30 text-primary-900 transition hover:border-primary-900 hover:bg-primary-50"
                  onClick={openContact}
                >
                  <svg
                    className="h-4 w-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
