type HeaderLink = {
  url: string;
  tooltip: string;
  tag: string;
  isExternal: boolean;
  minSizeToShow: string;
  showLinkOnMobile: boolean;
};

const overview: HeaderLink = {
  url: "/",
  tooltip: "Wedding Photography",
  tag: "overview",
  isExternal: false,
  minSizeToShow: "sm",
  showLinkOnMobile: true,
};
const faq: HeaderLink = {
  url: "/faq",
  tooltip: "FAQ",
  tag: "faq",
  isExternal: false,
  minSizeToShow: "sm",
  showLinkOnMobile: false,
};
const meetTheTeam: HeaderLink = {
  url: "/team",
  tooltip: "The Team",
  tag: "team",
  isExternal: false,
  minSizeToShow: "md",
  showLinkOnMobile: false,
};
const pricing: HeaderLink = {
  url: "/pricing",
  tooltip: "Pricing",
  tag: "pricing",
  isExternal: false,
  minSizeToShow: "sm",
  showLinkOnMobile: false,
};
const contact: HeaderLink = {
  url: "/contact",
  tooltip: "Contact",
  tag: "contact",
  isExternal: false,
  minSizeToShow: "sm",
  showLinkOnMobile: false,
};
const gallery: HeaderLink = {
  url: "/gallery",
  tooltip: "Galleries & Inspo",
  tag: "gallery",
  isExternal: false,
  minSizeToShow: "sm",
  showLinkOnMobile: false,
};
const morePictures: HeaderLink = {
  url: "https://gallery.bemontphoto.com/favorites/",
  tooltip: "Extended Portfolio",
  tag: "morePictures",
  isExternal: true,
  minSizeToShow: "3xl",
  showLinkOnMobile: true,
};
const galleries: HeaderLink = {
  url: "https://gallery.bemontphoto.com/",
  tooltip: "Full Galleries",
  tag: "galleries",
  isExternal: true,
  minSizeToShow: "3xl",
  showLinkOnMobile: true,
};
const makeAPayment: HeaderLink = {
  url: "https://www.paypal.me/BemontPhoto",
  tooltip: "Make a Payment",
  tag: "payment",
  isExternal: true,
  minSizeToShow: "3xl",
  showLinkOnMobile: true,
};
const instagram: HeaderLink = {
  url: "https://www.instagram.com/thebemontphoto/",
  tooltip: "Instagram",
  tag: "instagram",
  isExternal: true,
  minSizeToShow: "3xl",
  showLinkOnMobile: true,
};

const headerLinks = {
  overview: overview,
  faq: faq,
  pricing: pricing,
  contact: contact,
  meetTheTeam: meetTheTeam,
  gallery: gallery,
  //morePictures: morePictures,
  //galleries: galleries,
  makeAPayment: makeAPayment,
  instagram: instagram,
};

const allHeaderLinks = [
  overview,
  faq,
  pricing,
  contact,
  meetTheTeam,
  gallery,
  //morePictures,
  //galleries,
  makeAPayment,
  instagram,
];

export {
  type HeaderLink,
  headerLinks,
  allHeaderLinks,
  overview,
  faq,
  pricing,
  contact,
  meetTheTeam,
  gallery,
  //morePictures,
  //galleries,
  makeAPayment,
  instagram,
};
