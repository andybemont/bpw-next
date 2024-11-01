import React from "react";
import { HeaderLink } from "../../lib/header-content";
import Image from "next/image";

interface NamedIconProps {
  icon: HeaderLink;
}

const NamedIcon = (props: NamedIconProps) => {
  const { icon } = props;

  return (
    <>
      <div
        suppressHydrationWarning={true}
        data-title={icon.tooltip}
        className="text-blue-950 w-6 h-6"
      >
        <Image src={icon.icon} alt={icon.tooltip} className="w-6 h-6" />
      </div>{" "}
    </>
  );
};

export default NamedIcon;
