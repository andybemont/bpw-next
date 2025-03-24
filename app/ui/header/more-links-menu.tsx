"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import menuIcon from "../../../public/menu.svg";
import { allHeaderLinks } from "../../lib/header-content";
import TextHeaderLink from "./text-header-link";

const MoreLinksMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleOutsideClick: any = (event: MouseEvent) => {
    var target = event?.target as HTMLElement;
    if (!document.getElementById("menuContainer")?.contains(target)) {
      setShowMenu(false);
    }
    return true;
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div
        className={`flex flex-row cursor-pointer`}
        key={"menu"}
        id="menuContainer"
        onClick={handleToggleClick}
      >
        <div className="grow" />
        <div title={"Menu"} className="text-primary-900 w-4 h-4 sm:hidden">
          <Image
            src={menuIcon}
            alt="Menu"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        </div>
        <span className="hidden sm:block">More...</span>
        <div className="grow" />
      </div>
      {showMenu && (
        <ul className="absolute w-48 min-w-full top-[16px] sm:top-[32px] text-primary-50 bg-primary-900/90 text-center">
          {allHeaderLinks.map((link) => {
            return (
              <li className={`h-[25px]`} key={link.tag}>
                <TextHeaderLink link={link} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MoreLinksMenu;
