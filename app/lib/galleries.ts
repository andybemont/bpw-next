import { PortfolioImage } from "./portfolio";
import namedPortfolioImages from "./named-portfolio-images";

export type Gallery = {
  image: PortfolioImage;
  title: string;
  description: string;
  link: string;
  seoTitle: string;
  seoDescription: string;
  filter: (source: PortfolioImage[]) => PortfolioImage[];
};

export type ClientGallery = {
  image: PortfolioImage;
  title: string;
  description: string;
  url: string;
};

const clientGalleries = {
  ilonaAndJake: {
    image: namedPortfolioImages.ilonaInField,
    title: "Full Wedding: Ilona & Jake",
    description: "Just a normal day at the Farm",
    url: "https://gallery.bemontphoto.com/ilonaandjacob/",
  } satisfies ClientGallery,
  kacieAndJim: {
    image: namedPortfolioImages.kacieDip,
    title: "Full Wedding: Kacie & Jim",
    description: "A big buffalo blowout",
    url: "https://gallery.bemontphoto.com/kacieandjim-1/",
  } satisfies ClientGallery,
  danielleAndGreg: {
    image: namedPortfolioImages.danielleAndGreg,
    title: "Full Wedding: Danielle & Greg",
    description: "Ten Hours at Ravenwood, but no golf",
    url: "https://gallery.bemontphoto.com/danielleandgreg/",
  } satisfies ClientGallery,
  alexAndEnzo: {
    image: namedPortfolioImages.alexAndEnzo,
    title: "Full Wedding: Alex & Enzo",
    description: "Pearl Street party people",
    url: "https://gallery.bemontphoto.com/alexenzo/",
  } satisfies ClientGallery,
};

const galleries = {
  favorites: {
    image: namedPortfolioImages.hyattDip,
    title: "Our Favorites",
    description: "Some of Bemont Photo's most memorable wedding pictures",
    link: "favorite-wedding-photos",
    seoTitle: "Rochester Wedding Photography | Favorite Wedding Pictures",
    seoDescription: "A collection of great wedding photos",
    filter: (images) => images.filter((i) => i.rating > 1),
  } satisfies Gallery,
  kids: {
    image: namedPortfolioImages.kidsAtPicnicTable,
    title: "Kids Being Kids",
    description: 'Why you might say "yes" to children at your wedding',
    link: "kids-at-weddings",
    seoTitle: "Rochester Wedding Photography | Kids",
    seoDescription:
      "A collection of wedding photography featuring children at weddings",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Kids")),
  } satisfies Gallery,
  field: {
    image: namedPortfolioImages.gcvm,
    title: "In The Weeds",
    description: "Top Tip: Get married by a pretty field",
    link: "photos-in-fields",
    seoTitle: "Rochester Wedding Photography | Fields",
    seoDescription:
      "A collection of wedding photography featuring fields, farms and pastures",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Field")),
  } satisfies Gallery,
  rowdyDancing: {
    image: namedPortfolioImages.mimiPartying,
    title: "Dance Party",
    description: "When we leave our dignity back at the table",
    link: "dancing-photos",
    seoTitle: "Rochester Wedding Photography | Dance Party",
    seoDescription: "A collection of wedding photography featuring wild dancing",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Rowdy Dancing")),
  } satisfies Gallery,
  animals: {
    image: namedPortfolioImages.kidsWithDog,
    title: "Furry Friends",
    description: "Because animals are people, too",
    link: "animal-photos",
    seoTitle: "Rochester Wedding Photography | Animals",
    seoDescription:
      "A collection of wedding photography featuring dogs and other animals",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Animals")),
  } satisfies Gallery,
  parentDances: {
    image: namedPortfolioImages.conorAndRenee,
    title: "Parent Dances",
    description: "Because parents are people, too",
    link: "parent-dance-photos",
    seoTitle: "Rochester Wedding Photography | Parent Dances",
    seoDescription:
      "A collection of wedding photography featuring mother-son and father-daughter dances",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Parent Dance")),
  } satisfies Gallery,
  rings: {
    image: namedPortfolioImages.ringShot,
    title: "Hot Ice",
    description: "Ring shots are actually our favorite part",
    link: "wedding-ring-photos",
    seoTitle: "Rochester Wedding Photography | Hot Ice",
    seoDescription:
      "A collection of wedding photography featuring wedding rings",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Rings")),
  } satisfies Gallery,
  speeches: {
    image: namedPortfolioImages.dadJokeSpeech,
    title: "Speeches",
    description: "You probably weren't ready to eat yet, anyway",
    link: "wedding-speech-photos",
    seoTitle: "Rochester Wedding Photography | Speeches",
    seoDescription: "A collection of wedding photography featuring toasts",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Speeches")),
  } satisfies Gallery,
  firstDances: {
    image: namedPortfolioImages.amandaFirstDance,
    title: "First Dances",
    description: "Dance like literally everyone is watching",
    link: "first-dance-photos",
    seoTitle: "Rochester Wedding Photography | First Dances",
    seoDescription: "A collection of wedding photography featuring first dances",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("First Dance")),
  } satisfies Gallery,
  grandFinales: {
    image: namedPortfolioImages.ravenwoodFirstKiss,
    title: "Grand Finales",
    description: "When you're finally actually married",
    link: "first-kiss-and-recessionals",
    seoTitle: "Rochester Wedding Photography | Grand Finales",
    seoDescription:
      "A collection of wedding photography featuring the end of ceremonies",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Grand Finale")),
  } satisfies Gallery,
  ravenwood: {
    image: namedPortfolioImages.kenseyParentDance,
    title: "Featured Venue: Ravenwood",
    description: "Victor, NY",
    link: "ravenwood-wedding-photos",
    seoTitle: "Rochester Wedding Photography | Ravenwood",
    seoDescription:
      "A collection of wedding photography featuring Ravenwood Golf Club in Victor, NY",
    filter: (images) => images.filter((i) => i.venue === "Ravenwood"),
  } satisfies Gallery,
  otherDetails: {
    image: namedPortfolioImages.lemonTable,
    title: "Clothes and Decor",
    description: "Nice pictures of nice things by nice photographers",
    link: "wedding-decor",
    seoTitle: "Rochester Wedding Photography | Details",
    seoDescription:
      "A collection of wedding photography featuring decor, clothes, and other details",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Other Details")),
  } satisfies Gallery,
  flowers: {
    image: namedPortfolioImages.bouquetHandHold,
    title: "Flowers",
    description: "The latest must-have wedding fad",
    link: "wedding-flower-photos",
    seoTitle: "Rochester Wedding Photography | Flowers",
    seoDescription:
      "A collection of wedding photography featuring bouquets and other flowers",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Flowers")),
  } satisfies Gallery,
  extraCheese: {
    image: namedPortfolioImages.kacieVeilKiss,
    title: "Extra Cheese",
    description: "They don't ALL have to be candid",
    link: "romantic-wedding-photos",
    seoTitle: "Rochester Wedding Photography | Extra Cheese",
    seoDescription:
      "A collection of wedding photography featuring dramatic poses and backdrops",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Extra Cheese")),
  } satisfies Gallery,
  processionals: {
    image: namedPortfolioImages.bubblePoke,
    title: "Processionals",
    description: "Arriving in style",
    link: "processional-photos",
    seoTitle: "Rochester Wedding Photography | Processional",
    seoDescription: "A collection of wedding photography featuring processionals",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Processional")),
  } satisfies Gallery,
  blackAndWhite: {
    image: namedPortfolioImages.blackAndWhiteKids,
    title: "Black & White",
    description: "When the moment is better than the light",
    link: "black-and-white-wedding-photos",
    seoTitle: "Rochester Wedding Photography | Black and White",
    seoDescription: "A collection of black and white wedding photography",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Black and White")),
  } satisfies Gallery,
  gettingReady: {
    image: namedPortfolioImages.chelseaGettingReady,
    title: "Getting Ready",
    description: "When all your dangerous fasting pays off",
    link: "getting-ready-photos",
    seoTitle: "Rochester Wedding Photography | Getting Ready",
    seoDescription:
      "A collection of wedding photography featuring wedding preparations",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Getting Ready")),
  } satisfies Gallery,
  dessert: {
    image: namedPortfolioImages.niceCake,
    title: "Dessert Time",
    description: "Don't just look at it - eat it!",
    link: "wedding-desserts",
    seoTitle: "Rochester Wedding Photography | Desserts",
    seoDescription:
      "A collection of wedding photography featuring cakes, cake cutting, and other desserts",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Dessert")),
  } satisfies Gallery,
  figHollow: {
    image: namedPortfolioImages.figHollowDance,
    title: "Featured Venue: Fig Hollow",
    description: "Palmyra, NY",
    link: "fig-hollow-wedding-photos",
    seoTitle: "Rochester Wedding Photography | Fig Hollow",
    seoDescription:
      "A collection of wedding photography featuring Fig Hollow in Palmyra, NY",
    filter: (images) => images.filter((i) => i.venue === "Fig Hollow"),
  } satisfies Gallery,
  otherCandids: {
    image: namedPortfolioImages.maryCovell,
    title: "Candid Moments",
    description: "We're always watching",
    link: "candid-wedding-photos",
    seoTitle: "Rochester Wedding Photography | Candid Photos",
    seoDescription: "A collection of unposed wedding photos",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Other Candids")),
  } satisfies Gallery,
  ceremony: {
    image: namedPortfolioImages.jennyCeremony,
    title: "The Main Event",
    description: "Supposedly the reason we're all here",
    link: "wedding-ceremony-photos",
    seoTitle: "Rochester Wedding Photography | Ceremony",
    seoDescription:
      "A collection of wedding photography featuring the actual ceremony",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Ceremony")),
  } satisfies Gallery,
  firstLook: {
    image: namedPortfolioImages.keukaFirstLook,
    title: "First Looks",
    description: "...they'd better cry a lot",
    link: "first-look-photos",
    seoTitle: "Rochester Wedding Photography | First Looks",
    seoDescription: "A collection of wedding photography featuring first looks",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("First Look")),
  } satisfies Gallery,
  happyCouple: {
    image: namedPortfolioImages.beaverFlowers,
    title: "Glowing",
    description:
      "Happy to be married? Or because they love their photographer?",
    link: "happy-wedding-photos",
    seoTitle: "Rochester Wedding Photography | Happy Couples",
    seoDescription:
      "A collection of wedding photography featuring smiling brides and grooms",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Happy Couple")),
  } satisfies Gallery,
  lookingAtCamera: {
    image: namedPortfolioImages.abbyWintergarden,
    title: "Looking Here!",
    description:
      "It's okay to just smile into the camera like a dork sometimes",
    link: "posed-wedding-photos",
    seoTitle: "Rochester Wedding Photography | Group Shots",
    seoDescription:
      "A collection of wedding photography featuring people smiling for the camera",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Looking at Camera")),
  } satisfies Gallery,
  natural: {
    image: namedPortfolioImages.rozGian,
    title: "We Just Found Them Like That!",
    description: "(jk we made them do that)",
    link: "natural-wedding-photos",
    seoTitle: "Rochester Wedding Photography | Natural Poses",
    seoDescription:
      "A collection of wedding photography featuring comfortable brides and grooms",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Natural Couple")),
  } satisfies Gallery,
  silly: {
    image: namedPortfolioImages.buttDancing,
    title: "Silly Stuff",
    description: "They aren't taking this seriously...",
    link: "silly-wedding-photos",
    seoTitle: "Rochester Wedding Photography | Silly Stuff",
    seoDescription:
      "A collection of wedding photography featuring silly moments and people",
    filter: (images) =>
      images.filter((i) => i.keywords.includes("Silly")),
  } satisfies Gallery,
};

export const allGalleries: (Gallery | ClientGallery)[] = [
  galleries.favorites,
  galleries.kids,
  galleries.field,
  clientGalleries.ilonaAndJake,
  galleries.rowdyDancing,
  galleries.animals,
  galleries.parentDances,
  clientGalleries.kacieAndJim,
  galleries.rings,
  galleries.speeches,
  galleries.firstDances,
  galleries.grandFinales,
  clientGalleries.alexAndEnzo,
  galleries.ravenwood,
  galleries.otherDetails,
  galleries.flowers,
  galleries.extraCheese,
  clientGalleries.danielleAndGreg,
  galleries.processionals,
  galleries.blackAndWhite,
  galleries.gettingReady,
  galleries.dessert,
  galleries.figHollow,
  galleries.otherCandids,
  galleries.ceremony,
  galleries.firstLook,
  galleries.happyCouple,
  galleries.lookingAtCamera,
  galleries.natural,
  galleries.silly,
];

export function isClientGallery(
  gallery: Gallery | ClientGallery,
): gallery is ClientGallery {
  return "url" in gallery;
}

export function getGalleryBySlug(slug: string): Gallery | undefined {
  return Object.values(galleries).find((gallery) => gallery.link === slug);
}

export function getAllGallerySlugs(): string[] {
  return Object.values(galleries).map((gallery) => gallery.link);
}

export default galleries;
