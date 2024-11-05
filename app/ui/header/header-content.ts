type HeaderLink = {
  url: string;
  tooltip: string;
  tag: string;
  isExternal: boolean;
  minSizeToShow: string;
};

const siteMenu: HeaderLink = {
  url: "/sitemenu",
  tooltip: "Everything",
  tag: "sitemenu",
  isExternal: false,
  minSizeToShow: "3xl",
};
const overview: HeaderLink = {
  url: "/",
  tooltip: "Wedding Photography",
  tag: "overview",
  isExternal: false,
  minSizeToShow: "sm",
};
const faq: HeaderLink = {
  url: "/faq",
  tooltip: "FAQ",
  tag: "faq",
  isExternal: false,
  minSizeToShow: "sm",
};
const meetTheTeam: HeaderLink = {
  url: "/team",
  tooltip: "Meet the Team",
  tag: "team",
  isExternal: false,
  minSizeToShow: "md",
};
const pricing: HeaderLink = {
  url: "/pricing",
  tooltip: "Pricing",
  tag: "pricing",
  isExternal: false,
  minSizeToShow: "sm",
};
const contact: HeaderLink = {
  url: "/contact",
  tooltip: "Contact",
  tag: "contact",
  isExternal: false,
  minSizeToShow: "sm",
};
const gallery: HeaderLink = {
  url: "/gallery",
  tooltip: "Favorite Photos",
  tag: "gallery",
  isExternal: false,
  minSizeToShow: "sm",
};
const gear: HeaderLink = {
  url: "/gear",
  tooltip: "Gear",
  tag: "gear",
  isExternal: false,
  minSizeToShow: "lg",
};
const venues: HeaderLink = {
  url: "/venues",
  tooltip: "Favorite Venues",
  tag: "venues",
  isExternal: false,
  minSizeToShow: "xl",
};
const morePictures: HeaderLink = {
  url: "https://gallery.bemontphoto.com/favorites/",
  tooltip: "Extended Portfolio",
  tag: "morePictures",
  isExternal: true,
  minSizeToShow: "3xl",
};
const galleries: HeaderLink = {
  url: "https://gallery.bemontphoto.com/",
  tooltip: "Full Galleries",
  tag: "galleries",
  isExternal: true,
  minSizeToShow: "3xl",
};
const makeAPayment: HeaderLink = {
  url: "https://www.paypal.me/BemontPhoto",
  tooltip: "Make a Payment",
  tag: "payment",
  isExternal: true,
  minSizeToShow: "3xl",
};
const instagram: HeaderLink = {
  url: "https://www.instagram.com/thebemontphoto/",
  tooltip: "Instagram",
  tag: "instagram",
  isExternal: true,
  minSizeToShow: "3xl",
};

const headerLinks = {
  overview: overview,
  faq: faq,
  pricing: pricing,
  contact: contact,
  meetTheTeam: meetTheTeam,
  gallery: gallery,
  gear: gear,
  venues: venues,
  morePictures: morePictures,
  galleries: galleries,
  makeAPayment: makeAPayment,
  instagram: instagram,
};

const allHeaderLinks = [
  //siteMenu,
  overview,
  faq,
  pricing,
  contact,
  meetTheTeam,
  gallery,
  //gear,
  //venues,
  morePictures,
  galleries,
  makeAPayment,
  instagram,
];

export {
  type HeaderLink,
  headerLinks,
  allHeaderLinks,
  siteMenu,
  overview,
  faq,
  pricing,
  contact,
  meetTheTeam,
  gallery,
  gear,
  venues,
  morePictures,
  galleries,
  makeAPayment,
  instagram,
};
