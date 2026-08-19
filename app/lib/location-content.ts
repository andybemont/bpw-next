import namedPortfolioImages from "./named-portfolio-images";

export type LocationKey =
  | "rochester"
  | "buffalo"
  | "finger-lakes"
  | "western-ny";

export type LocationContent = {
  key: LocationKey;
  displayName: string;
  h1Location: string;
  tagline: string;
  localParagraphs: string[];
  closingLine: string;
  heroImage: (typeof namedPortfolioImages)[keyof typeof namedPortfolioImages];
};

const sharedPricingLine =
  "Wedding photography starts at $3,200. That includes your first six hours with two photographers, planning help, natural editing, and an online gallery of high-resolution images. Extra hours and an engagement session can be added later if you need them.";

export const locationContent: Record<LocationKey, LocationContent> = {
  rochester: {
    key: "rochester",
    displayName: "Rochester",
    h1Location: "Rochester",
    tagline:
      "Wedding photography for people who want beautiful photos of an effortless day",
    localParagraphs: [
      "We’re based in Rochester, so this is home turf. We’ve photographed weddings at the Hyatt and Arbor at the Port, at Genesee Country Village and Rochester museums, in downtown lofts, suburban clubs, backyard tents, and everywhere in between.",
      "Rochester weddings often mean a little time at a pretty park or a quick stop near the river for portraits, then back to the party. We know the light at Highland Park in May, how reception timing works when you’re hopping between a ceremony and a city venue, and how to keep family formals moving so you can get back to your guests.",
      "Wedding-day travel within 45 minutes of Rochester is included. Beyond that, travel is a flat $225—simple enough to know where you stand before we start planning.",
    ],
    closingLine:
      "Based in Rochester. Also serving Buffalo, Syracuse, the Finger Lakes, and all of Western New York.",
    heroImage: namedPortfolioImages.amandaFirstDance,
  },
  buffalo: {
    key: "buffalo",
    displayName: "Buffalo",
    h1Location: "Buffalo, NY",
    tagline:
      "Buffalo wedding photography with a candid, unhurried approach",
    localParagraphs: [
      "We love shooting in Buffalo. Some of our favorite weddings have been big city celebrations—industrial spaces, waterfront views, classic churches, and reception rooms that stay loud until the last dance.",
      "Buffalo couples often have guests spread across two cities or families split between Rochester and Buffalo, which means timelines need to be realistic and portrait time needs to be protected without killing the vibe. We’re used to that.",
      "We travel to Buffalo regularly from Rochester. Weddings beyond our included 45-minute travel radius have a flat $225 travel fee, and we’ll help you plan a day that accounts for the drive, the light, and the fact that you’d rather be with your people than in a photo line.",
    ],
    closingLine:
      "Rochester-based, Buffalo-ready. See our galleries for Buffalo-area weddings and get in touch to check your date.",
    heroImage: namedPortfolioImages.kacieDip,
  },
  "finger-lakes": {
    key: "finger-lakes",
    displayName: "Finger Lakes",
    h1Location: "Finger Lakes",
    tagline:
      "Finger Lakes wedding photography for vineyards, lake views, and long golden evenings",
    localParagraphs: [
      "Finger Lakes weddings have their own rhythm: ceremonies with a view, cocktail hour outdoors until the wind picks up, and portraits that depend on whether the lake is glowing or the clouds are rolling in.",
      "We’ve photographed weddings at wineries, lakefront venues, and barns from Canandaigua to Skaneateles and Geneva. That means planning for sunset timing, sensible footwear for grass and gravel, and knowing when to grab the wide shot before the light disappears behind the hills.",
      "Most Finger Lakes weddings involve a bit more travel for us than a Rochester Saturday, and that’s normal. We build timelines with drive time in mind so you’re not rushed through a first look because we’re watching the clock.",
    ],
    closingLine:
      "From Rochester to the Finger Lakes—wineries, lake houses, and barns. Packages start at $3,200, plus a flat $225 travel fee beyond 45 minutes from Rochester.",
    heroImage: namedPortfolioImages.keukaFirstLook,
  },
  "western-ny": {
    key: "western-ny",
    displayName: "Western New York",
    h1Location: "Western New York",
    tagline:
      "Western New York wedding photographers for couples across the region",
    localParagraphs: [
      "Bemont Photo is based in Rochester and photographs weddings throughout Western New York—from city celebrations in Rochester and Buffalo to lake weddings in the Finger Lakes and everything in between.",
      "If you’re not sure which page fits you best, start here: we serve couples in Syracuse, Geneva, Canandaigua, Batavia, Skaneateles, and the wider region. What matters most to us is whether we’re a good fit for how you want your day to feel, not whether your venue is twenty minutes away or two hours.",
      "Western NY weddings vary more in travel and timeline than almost anything else we plan for. We’ll talk through your venues, your guest flow, and what “relaxed coverage” should look like on your specific day.",
    ],
    closingLine:
      "Explore Rochester, Buffalo, and Finger Lakes pages for more detail—or reach out and we’ll tell you honestly whether your wedding is in our wheelhouse.",
    heroImage: namedPortfolioImages.gcvm,
  },
};

export function getLocationContent(key: LocationKey): LocationContent {
  return locationContent[key];
}

export { sharedPricingLine };
