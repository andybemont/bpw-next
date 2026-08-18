"use client";

import { useEffect, useRef, useState } from "react";
import { HeaderLink } from "@/app/lib/header-content";
import TextHeaderLink from "./text-header-link";

export default function MoreLinksMenu({ links }: { links: HeaderLink[] }) {
  const [showMenu, setShowMenu] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!showMenu) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowMenu(false);
    };

    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [showMenu]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setShowMenu((current) => !current)}
        aria-expanded={showMenu}
        className="flex min-h-11 items-center font-display text-[1.05rem] font-medium underline decoration-primary-300 underline-offset-4"
      >
        {showMenu ? "Close" : "Menu"}
      </button>
      {showMenu ? (
        <nav aria-label="Mobile navigation" className="absolute right-0 top-full z-30 mt-2 w-[min(20rem,calc(100vw-2rem))] border border-primary-300/70 bg-primary-50 px-5 py-4 shadow-[0_20px_60px_rgb(29_33_28/0.14)]">
          <ul>
            {links.map((link) => (
              <li key={link.tag} onClick={() => setShowMenu(false)}>
                <TextHeaderLink link={link} />
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
