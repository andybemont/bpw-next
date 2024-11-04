"use client";
import { useState } from "react";
import Image from "next/image";
import menuIcon from "../../../public/menu.svg";

const MoreLinksMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={`grow pb-1 text-center transition-all border-b-2 border-transparent hover:border-blue-950 flex flex-row cursor-pointer`}
      key={"menu"}
      onClick={() => setShowMenu(!showMenu)}
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
  );
};

export default MoreLinksMenu;
