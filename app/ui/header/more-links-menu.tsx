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

  const handleToggleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowMenu((prev) => !prev);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event?.target as HTMLElement;
    const menuContainer = document.getElementById("menuContainer");
    const menuList = document.getElementById("menuList");
    if (
      menuContainer &&
      !menuContainer.contains(target) &&
      menuList &&
      !menuList.contains(target)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      window.addEventListener("click", handleOutsideClick);
      return () => window.removeEventListener("click", handleOutsideClick);
    }
  }, [showMenu]);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <button
        className="inline-flex h-11 w-11 items-center justify-center text-primary-900 transition hover:text-primary-950"
        key="menu"
        id="menuContainer"
        onClick={handleToggleClick}
        aria-haspopup="menu"
        aria-expanded={showMenu}
        aria-label="Open menu"
      >
        <Image src="/menu.svg" alt="" width={22} height={22} aria-hidden="true" />
      </button>
      {showMenu && (
        <ul
          id="menuList"
          className="absolute left-0 top-full z-20 mt-2 w-52 rounded-md bg-primary-900/95 py-1 text-left text-primary-50 shadow-lg md:left-0 md:top-[32px]"
        >
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
