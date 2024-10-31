import AdditionalLinksMenu from "./additional-links-menu";
import React from "react";
import Link from "next/link";
import logo from "../../../public/logo.webp";
import Image from "next/image";
import "./header.css";
import { headerLinks } from "@/app/lib/header-content";
import IconHeaderLink from "./icon-header-link";
import TextHeaderLink from "./text-header-link";

export default function Header() {
  return (
    <div className="flex flex-row h-10 md:h-28 p-1">
      <div className="w-14 md:w-36">
        <Link href="/">
          <Image
            priority
            src={logo}
            alt={"Fun Candid Photographers"}
            className="h-10 md:h-24 w-14 md:w-36"
          />
        </Link>
      </div>
      <div className="grow hidden md:block items-end">
        <div className="items-end justify-center">
          <div>
            <h1 className="pt-2 text-5xl font-bold text-right text-blue-950">
              Rochester Wedding Photography
            </h1>
          </div>
          <div className="flex flex-row items-end">
            <IconHeaderLink link={headerLinks.overview} />
            <IconHeaderLink link={headerLinks.meetTheTeam} />
            <IconHeaderLink link={headerLinks.faq} />
            <IconHeaderLink link={headerLinks.pricing} />
            <IconHeaderLink link={headerLinks.contact} />
            <IconHeaderLink
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
            />
            <h2 className="text-3xl font-bold text-left text-blue-950 align-bottom">
              by Bemont Photo
            </h2>
          </div>
        </div>
        <div className="block md:hidden">
          <AdditionalLinksMenu />
        </div>
      </div>
    </div>
  );
}
