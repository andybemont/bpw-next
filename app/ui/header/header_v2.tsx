import React from "react";
import Link from "next/link";
import logo from "../../../public/logo.webp";
import Image from "next/image";
import { allHeaderLinks } from "@/app/ui/header/header-content";
import TextHeaderLink from "./text-header-link";
import MoreLinksMenu from "./more-links-menu";

export const MenuHeight = "128px";

export default function HeaderV2() {
  return (
    <div className="fixed flex flex-row w-screen h-16 sm:h-[84px] bg-white/70 z-10 text-blue-950">
      <div id="everythingLeftOfIcon" className="grow flex flex-col mb-2 p-1 ">
        <div id="topRow" className="flex flex-row align-text-bottom pt-2">
          <h1 className="text-xl md:text-4xl font-bold text-left ml-auto">
            Rochester Wedding Photography
          </h1>
          <h2 className="text-xl md:text-3xl text-left align-bottom pl-2 md:pt-1 mr-auto">
            by Bemont Photo
          </h2>
        </div>
        <div id="bottomRowWithIcons" className="flex flex-row items-end">
          <div className="grow" />
          {allHeaderLinks.map((link) => {
            return (
              <div
                key={link.tag}
                className={`grow text-center transition-all border-b-2 border-transparent hover:border-blue-950 hidden ${link.minSizeToShow}:block`}
              >
                <TextHeaderLink link={link} hideBasedOnSize />
              </div>
            );
          })}
          <div
            key="menu"
            className="grow text-center transition-all border-b-2 border-transparent hover:border-blue-950 pb-0"
          >
            <MoreLinksMenu />
          </div>
          <div className="grow" />
        </div>
      </div>
      <div className="h-[84px] w-[92px] hidden sm:block">
        <Link href="/">
          <Image
            priority
            src={logo}
            alt={"Fun Candid Photographers"}
            className="h-[84px] w-[92px] object-cover object-center"
          />
        </Link>
      </div>
    </div>
  );
}
