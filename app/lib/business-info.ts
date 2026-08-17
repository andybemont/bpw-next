/** Canonical business facts aligned with Google Business Profile. */
export const businessInfo = {
  name: "Bemont Photo",
  legalName: "Bemont Photo Wedding Photography",
  description:
    "Bemont Photo provides wedding photography as a family team based in Rochester, NY. We capture candid, natural moments from your entire day with flexible, friendly service and easy online booking.",
  gmbDescription:
    "Bemont Photo provides wedding and family photography as a husband and wife duo! We strive to capture every beautiful moment and detail from your entire day so you'll have those memories forever. In addition to delivering great images, we're guaranteed to be the easiest part of your wedding planning; we're flexible, friendly, and easy to book with online contracts and invoices. See our site for lots of additional information!",
  website: "https://www.bemontphoto.com",
  /** Listed on GMB for Messaging; intentionally omitted from public site marketing. */
  phoneDisplay: "(585) 590-0570",
  phoneTel: "+15855900570",
  smsTel: "sms:+15855900570",
  foundingDate: "2017-04-01",
  priceRange: "$$$",
  /** GMB: no public storefront — service-area business only */
  hasPublicStorefront: false,
  socialProfiles: {
    instagram: "https://www.instagram.com/thebemontphoto/",
    facebook: "https://www.facebook.com/bemontphoto",
  },
  serviceAreas: [
    "Rochester, NY",
    "Buffalo, NY",
    "Syracuse, NY",
    "Finger Lakes, NY",
    "Geneva, NY",
    "Batavia, NY",
    "Canandaigua, NY",
    "Skaneateles, NY",
    "Western New York",
  ],
  openingHours: {
    opens: "09:00",
    closes: "21:00",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  categories: ["Wedding photographer", "Photographer"],
} as const;

export default businessInfo;
