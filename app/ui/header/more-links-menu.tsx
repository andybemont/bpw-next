"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import menuIcon from "../../../public/menu.svg";
import { allHeaderLinks } from "./header-content";
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
    <div className="relative">
      <div
        className={`flex flex-row cursor-pointer`}
        key={"menu"}
        id="menuContainer"
        onClick={handleToggleClick}
      >
        <div className="grow" />
        <div data-title={"Menu"} className="text-blue-950 w-4 h-4 sm:hidden">
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
        <ul className="absolute min-w-[100%] top-[32px] left-[0px] text-white bg-blue-950/70 text-center">
          {allHeaderLinks.map((link) => {
            return (
              <li className="h-[25px]" key={link.tag}>
                <TextHeaderLink link={link} hideBasedOnSize={false} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MoreLinksMenu;
