type HeaderLink = {
  url: string;
  tooltip: string;
  tag: string;
  isExternal: boolean;
};

const overview: HeaderLink = {
  url: "/",
  tooltip: "Wedding Photography",
  tag: "overview",
  isExternal: false,
};
const faq: HeaderLink = {
  url: "/faq",
  tooltip: "FAQ",
  tag: "faq",
  isExternal: false,
};
const meetTheTeam: HeaderLink = {
  url: "/team",
  tooltip: "The Team",
  tag: "team",
  isExternal: false,
};
const pricing: HeaderLink = {
  url: "/pricing",
  tooltip: "Pricing",
  tag: "pricing",
  isExternal: false,
};
const contact: HeaderLink = {
  url: "/contact",
  tooltip: "Contact",
  tag: "contact",
  isExternal: false,
};
const gallery: HeaderLink = {
  url: "/gallery",
  tooltip: "Galleries & Inspo",
  tag: "gallery",
  isExternal: false,
};
const makeAPayment: HeaderLink = {
  url: "https://www.paypal.me/BemontPhoto",
  tooltip: "Make a Payment",
  tag: "payment",
  isExternal: true,
};
const instagram: HeaderLink = {
  url: "https://www.instagram.com/thebemontphoto/",
  tooltip: "Instagram",
  tag: "instagram",
  isExternal: true,
};

const headerLinks = {
  overview: overview,
  faq: faq,
  pricing: pricing,
  contact: contact,
  meetTheTeam: meetTheTeam,
  gallery: gallery,
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
  makeAPayment,
  instagram,
};
