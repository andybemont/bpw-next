"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { FaCalendarCheck, FaEnvelope } from "react-icons/fa6";
import { allHeaderLinks } from "@/app/lib/header-content";
import TextHeaderLink from "./text-header-link";
import MoreLinksMenu from "./more-links-menu";
import ContactOverlay from "../contact-overlay/contact-overlay";
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
  const [isContactOpen, setIsContactOpen] = useState(false);
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
                  onClick={() => setIsContactOpen(true)}
                >
                  <FaEnvelope className="text-base" aria-hidden="true" />
                </button>
              </div>
              <div className="absolute inset-y-0 -right-[72px] flex items-center">
                <button
                  type="button"
                  title="Check Availability"
                  aria-label="Check Availability"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-900/30 text-primary-900 transition hover:border-primary-900 hover:bg-primary-50"
                  onClick={() => setIsContactOpen(true)}
                >
                  <FaCalendarCheck className="text-base" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactOverlay
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </header>
  );
}
