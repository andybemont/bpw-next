import React from "react";
import Link from "next/link";
import logo from "../../../public/logo.webp";
import Image from "next/image";
import { headerLinks } from "@/app/ui/header/header-content";
import IconHeaderLink from "./icon-header-link";

export default function Header() {
  return (
    <div className="flex flex-row h-16 sm:h-24 p-1 mb-2">
      <div className="h-16 w-24 sm:h-24 sm:w-36">
        <Link href="/">
          <Image
            priority
            src={logo}
            alt={"Fun Candid Photographers"}
            className="h-16 w-24 sm:h-24 sm:w-36"
          />
        </Link>
      </div>
      <div className="grow hidden sm:block" />
      <div className="grow sm:grow-0 items-end">
        <div className="grow">
          <h1 className="pt-2 text-xl sm:text-4xl md:text-5xl font-bold text-center sm:text-right text-blue-950">
            Rochester Wedding Photography
          </h1>
        </div>
        <div className="flex flex-row items-end">
          <div className="grow md:hidden" />
          <IconHeaderLink link={headerLinks.overview} />
          <IconHeaderLink link={headerLinks.meetTheTeam} />
          <IconHeaderLink link={headerLinks.faq} />
          <IconHeaderLink link={headerLinks.pricing} />
          <IconHeaderLink link={headerLinks.contact} />
          {/* <IconHeaderLink
              key={headerLinks.morePictures.tag}
              link={headerLinks.morePictures}
            />
            <IconHeaderLink
              key={headerLinks.makeAPayment.tag}
              link={headerLinks.makeAPayment}
            />
            <IconHeaderLink
              key={headerLinks.instagram.tag}
              link={headerLinks.instagram}
            /> */}
          <h2 className="hidden sm:block text-l sm:text-3xl font-bold text-right text-blue-950 align-bottom">
            by Bemont Photo
          </h2>
        </div>
      </div>
    </div>
  );
}
