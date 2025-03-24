import React from "react";
import { allHeaderLinks } from "@/app/lib/header-content";
import TextHeaderLink from "./text-header-link";
import MoreLinksMenu from "./more-links-menu";

export const MenuHeight = "128px";

export default function Header({
  h1Text,
  h2Text,
}: {
  h1Text: string;
  h2Text: string;
}) {
  const hoverEffect = "transition-all hover:border-primary-950";

  return (
    <header>
      <div className="fixed flex flex-row w-screen h-[70px] sm:h-[70px] bg-primary-50 sm:bg-primary-50/70 z-10 text-primary-900 border-b border-primary-950 sm:border-b-0">
        <div id="everythingLeftOfIcon" className="w-full p-1">
          <div className="w-full sm:flex sm:flex-row">
            <h1 className="md:text-2xl font-bold text-center sm:ml-auto">
              {h1Text}
            </h1>
            <h2 className="text-sm md:text-2xl text-center min-h-2 sm:ml-4 sm:mr-auto">
              {h2Text}
            </h2>
          </div>
          <nav>
            <ul id="bottomRowWithIcons" className="flex flex-row items-end">
              <li className="grow" />
              {allHeaderLinks
                .filter((link) => !link.isExternal)
                .map((link) => {
                  return (
                    <li
                      key={link.tag}
                      className={`grow text-center border-b-2 border-transparent ${hoverEffect} hidden sm:block`}
                    >
                      <TextHeaderLink link={link} />
                    </li>
                  );
                })}
              <li
                key="menu"
                className={`grow text-center border-b-2 border-transparent ${hoverEffect} pb-0`}
              >
                <MoreLinksMenu />
              </li>
              <li className="grow" />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
