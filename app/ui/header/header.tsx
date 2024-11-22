import React from "react";
import { allHeaderLinks } from "@/app/lib/header-content";
import TextHeaderLink from "./text-header-link";
import MoreLinksMenu from "./more-links-menu";

export const MenuHeight = "128px";

export default function Header() {
  const hoverEffect = "transition-all hover:border-primary-950";

  return (
    <div className="fixed flex flex-row w-screen h-16 sm:h-[84px] bg-primary-50/90 sm:bg-primary-50/70 z-10 text-primary-900">
      <div id="everythingLeftOfIcon" className="grow flex flex-col mb-2 p-1 ">
        <div id="topRow" className="flex flex-row align-text-bottom pt-2">
          <p className="text-xl md:text-4xl font-bold text-left ml-auto">
            Rochester Wedding Photography
          </p>
          <p className="text-xl md:text-3xl text-left align-bottom pl-2 md:pt-1 mr-auto">
            by Bemont Photo
          </p>
        </div>
        <nav>
          <ul id="bottomRowWithIcons" className="flex flex-row items-end">
            <div className="grow" />
            {allHeaderLinks.map((link) => {
              return (
                <li
                  key={link.tag}
                  className={`grow text-center border-b-2 border-transparent ${hoverEffect} hidden ${link.minSizeToShow}:block`}
                >
                  <TextHeaderLink link={link} hideBasedOnSize />
                </li>
              );
            })}
            <li
              key="menu"
              className={`grow text-center border-b-2 border-transparent ${hoverEffect} pb-0`}
            >
              <MoreLinksMenu />
            </li>
            <div className="grow" />
          </ul>
        </nav>
      </div>
    </div>
  );
}
