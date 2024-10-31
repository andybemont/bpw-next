import React from "react";
import { HeaderLink, headerLinks } from "../../lib/header-content";
import {
  PhotoLibrary,
  ErrorOutline,
  Diversity3,
  House,
  Instagram,
  RequestQuote,
  ContactMail,
  Unarchive,
  Payments,
  Menu,
  Quiz,
} from "@mui/icons-material";

interface NamedIconProps {
  icon: HeaderLink;
}

const NamedIcon = (props: NamedIconProps) => {
  const { icon } = props;

  let iconElement = null;
  switch (icon.tag) {
    case headerLinks.morePictures.tag:
      iconElement = <PhotoLibrary />;
      break;
    case headerLinks.galleries.tag:
      iconElement = <Unarchive />;
      break;
    case headerLinks.makeAPayment.tag:
      iconElement = <Payments />;
      break;
    case headerLinks.instagram.tag:
      iconElement = <Instagram />;
      break;
    case headerLinks.overview.tag:
      iconElement = <House />;
      break;
    case headerLinks.meetTheTeam.tag:
      iconElement = <Diversity3 />;
      break;
    case headerLinks.faq.tag:
      iconElement = <Quiz />;
      break;
    case headerLinks.pricing.tag:
      iconElement = <RequestQuote />;
      break;
    case headerLinks.contact.tag:
      iconElement = <ContactMail />;
      break;
    case "Menu":
      iconElement = <Menu />;
      break;
    default:
      iconElement = <ErrorOutline />;
      break;
  }

  const tooltipId = `tt-${icon.tag}`;
  return (
    <>
      <div
        suppressHydrationWarning={true}
        title={icon.tooltip}
        className="text-blue-950 "
        data-tooltip-id={tooltipId}
        data-tooltip-content={icon.tooltip}
        data-tooltip-place="top"
      >
        {iconElement}
      </div>{" "}
    </>
  );
};

export default NamedIcon;
