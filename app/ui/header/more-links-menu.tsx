"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { HeaderLink } from "@/app/lib/header-content";
import TextHeaderLink from "./text-header-link";

type MoreLinksMenuProps = {
  links: HeaderLink[];
};

export default function MoreLinksMenu({ links }: MoreLinksMenuProps) {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleClick = () => {
    setShowMenu((prev) => !prev);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event?.target as HTMLElement;
    if (!document.getElementById("menuContainer")?.contains(target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <button
        className="flex items-center text-sm font-semibold text-primary-900 transition hover:text-primary-950"
        key="menu"
        id="menuContainer"
        onClick={handleToggleClick}
        aria-haspopup="menu"
        aria-expanded={showMenu}
      >
        <Image src="/menu.svg" alt="Menu" width={22} height={22} />
      </button>
      {showMenu && (
        <ul className="absolute w-48 min-w-full top-[16px] md:top-[32px] text-primary-50 bg-primary-900/90 text-center">
          {links.map((link) => (
            <li
              key={link.tag}
              className="flex"
              onClick={() => setShowMenu(false)}
            >
              <TextHeaderLink link={link} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
