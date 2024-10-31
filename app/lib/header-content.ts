import {
  contactIcon,
  faqIcon,
  galleriesIcon,
  homeIcon,
  instagramIcon,
  paymentIcon,
  portfolioIcon,
  pricingIcon,
  teamIcon,
} from "./icons";

type HeaderLink = {
  url: string;
  tooltip: string;
  tag: string;
  icon: any;
};

const overview: HeaderLink = {
  url: "/overview",
  tooltip: "Overview",
  tag: "overview",
  icon: homeIcon,
};
const faq: HeaderLink = {
  url: "/faq",
  tooltip: "FAQ",
  tag: "faq",
  icon: faqIcon,
};
const meetTheTeam: HeaderLink = {
  url: "/team",
  tooltip: "Meet the Team",
  tag: "team",
  icon: teamIcon,
};
const pricing: HeaderLink = {
  url: "/pricing",
  tooltip: "Pricing Calculator",
  tag: "pricing",
  icon: pricingIcon,
};
const contact: HeaderLink = {
  url: "/contact",
  tooltip: "Contact",
  tag: "contact",
  icon: contactIcon,
};
const morePictures: HeaderLink = {
  url: "https://gallery.bemontphoto.com/favorites/",
  tooltip: "Portfolio",
  tag: "morePictures",
  icon: portfolioIcon,
};
const galleries: HeaderLink = {
  url: "http://gallery.bemontphoto.com/",
  tooltip: "Full Galleries",
  tag: "galleries",
  icon: galleriesIcon,
};
const makeAPayment: HeaderLink = {
  url: "https://www.paypal.me/BemontPhoto",
  tooltip: "Make a Payment",
  tag: "payment",
  icon: paymentIcon,
};
const instagram: HeaderLink = {
  url: "https://www.instagram.com/thebemontphoto/",
  tooltip: "Instagram",
  tag: "instagram",
  icon: instagramIcon,
};

const headerLinks = {
  overview: overview,
  faq: faq,
  meetTheTeam: meetTheTeam,
  pricing: pricing,
  contact: contact,
  morePictures: morePictures,
  galleries: galleries,
  makeAPayment: makeAPayment,
  instagram: instagram,
};

const allHeaderLinks = [
  headerLinks.overview,
  headerLinks.meetTheTeam,
  headerLinks.faq,
  headerLinks.pricing,
  headerLinks.contact,
  headerLinks.morePictures,
  headerLinks.galleries,
  headerLinks.makeAPayment,
  headerLinks.instagram,
];

export { type HeaderLink, headerLinks, allHeaderLinks };
