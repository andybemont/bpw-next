import { PortfolioImage } from "../lib/best-ofs";
import namedPortfolioImages from "../lib/named-portfolio-images";

export type Gallery = {
  image: PortfolioImage;
  title: string;
  description: string;
  link: string;
  filter: (source: PortfolioImage[]) => PortfolioImage[];
  textColor?: string;
  bgColor?: string;
  accentColor?: string;
};

const galleries = {
  favorites: {
    image: namedPortfolioImages.hyattDip,
    title: "Our Favorites",
    description:
      "Some of Bemont Photo's most memorable wedding pictures since 2018",
    link: "favorite-wedding-photos",
    filter: (images) => images.filter((i) => i.rating > 1),
    textColor: "blue-50",
    bgColor: "blue-950",
    accentColor: "slate-400",
  } as Gallery,
  kids: {
    image: namedPortfolioImages.kidsAtPicnicTable,
    title: "Kids Being Kids",
    description: 'Why you might say "yes" to children at your wedding',
    link: "kids-at-weddings",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Kids")),
    textColor: "red-950",
    bgColor: "red-100",
    accentColor: "slate-400",
  } as Gallery,
  field: {
    image: namedPortfolioImages.gcvm,
    title: "In The Weeds",
    description: "Top Tip: Get married by a pretty field",
    link: "photos-in-fields",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Field")),
  } as Gallery,
  rowdyDancing: {
    image: namedPortfolioImages.buttDancing,
    title: "Dance Party",
    description: "When we leave our dignity back at the table",
    link: "dancing-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Rowdy Dancing")),
  } as Gallery,
  animals: {
    image: namedPortfolioImages.kidsWithDog,
    title: "Furry Friends",
    description: "Because animals are people, too",
    link: "animal-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Animals")),
  } as Gallery,
  parentDances: {
    image: namedPortfolioImages.conorAndRenee,
    title: "Parent Dances",
    description: "Because parents are people, too",
    link: "parent-dance-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Parent Dance")),
  } as Gallery,
  rings: {
    image: namedPortfolioImages.ringShot,
    title: "Hot Ice",
    description: "Ring shots are actually our favorite part",
    link: "wedding-ring-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Rings")),
  } as Gallery,
  speeches: {
    image: namedPortfolioImages.dadJokeSpeech,
    title: "Speeches",
    description: "You probably weren't ready to eat yet, anyway",
    link: "wedding-speech-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Speeches")),
  } as Gallery,
  wintergarden: {
    image: namedPortfolioImages.wintergardenFirstDance,
    title: "Featured Venue: The Wintergarden",
    description: "Downtown Rochester, NY",
    link: "wintergarden-wedding-photos",
    filter: (images) => images.filter((i) => i.venue === "Wintergarden"),
  } as Gallery,
  firstDances: {
    image: namedPortfolioImages.amandaFirstDance,
    title: "First Dances",
    description: "Dance like literally everyone is watching",
    link: "first-dance-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "First Dance")),
  } as Gallery,
  grandFinales: {
    image: namedPortfolioImages.ravenwoodFirstKiss,
    title: "Grand Finales",
    description: "When you're finally actually married",
    link: "first-kiss-and-recessionals",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Grand Finale")),
  } as Gallery,
  ravenwood: {
    image: namedPortfolioImages.kenseyParentDance,
    title: "Featured Venue: Ravenwood",
    description: "Victor, NY",
    link: "ravenwood-wedding-photos",
    filter: (images) => images.filter((i) => i.venue === "Ravenwood"),
  } as Gallery,
  otherDetails: {
    image: namedPortfolioImages.lemonTable,
    title: "Clothes and Decor",
    description: "Nice pictures of nice things by nice photographers",
    link: "wedding-decor",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Other Details")),
  } as Gallery,
  flowers: {
    image: namedPortfolioImages.bouquetHandHold,
    title: "Flowers",
    description: "The latest must-have wedding fad",
    link: "wedding-flower-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Flowers")),
  } as Gallery,
  extraCheese: {
    image: namedPortfolioImages.kacieVeilKiss,
    title: "Extra Cheese",
    description: "They don't ALL have to be candid",
    link: "romantic-wedding-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Extra Cheese")),
  } as Gallery,
  processionals: {
    image: namedPortfolioImages.bubblePoke,
    title: "Processionals",
    description: "Arriving in style",
    link: "processional-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Processional")),
  } as Gallery,
  blackAndWhite: {
    image: namedPortfolioImages.blackAndWhiteKids,
    title: "Black & White",
    description: "When the moment is better than the light",
    link: "black-and-white-wedding-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Black and White")),
  } as Gallery,
  gettingReady: {
    image: namedPortfolioImages.chelseaGettingReady,
    title: "Getting Ready",
    description: "No falsies too long",
    link: "getting-ready-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Getting Ready")),
  } as Gallery,
  gallagher: {
    image: namedPortfolioImages.gallagherKiss,
    title: "Featured Venue: The Gallagher",
    description: "Medina, NY",
    link: "gallagher-wedding-photos",
    filter: (images) => images.filter((i) => i.venue === "The Gallagher"),
  } as Gallery,
  dessert: {
    image: namedPortfolioImages.niceCake,
    title: "Dessert Time",
    description: "Don't just look at it - eat it!",
    link: "wedding-desserts",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Dessert")),
  } as Gallery,
  figHollow: {
    image: namedPortfolioImages.figHollowDance,
    title: "Featured Venue: Fig Hollow",
    description: "Palmyra, NY",
    link: "fig-hollow-wedding-photos",
    filter: (images) => images.filter((i) => i.venue === "Fig Hollow"),
  } as Gallery,

  otherCandids: {
    image: namedPortfolioImages.maryCovell,
    title: "Candid Moments",
    description: "We're always watching",
    link: "candid-wedding-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Other Candids")),
  } as Gallery,

  ceremony: {
    image: namedPortfolioImages.jennyCeremony,
    title: "The Main Event",
    description: "Supposedly the reason we're all here",
    link: "wedding-ceremony-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Ceremony")),
  } as Gallery,

  firstLook: {
    image: namedPortfolioImages.keukaFirstLook,
    title: "First Looks",
    description: "...and they'd better cry a lot",
    link: "first-look-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "First Look")),
  } as Gallery,

  happyCouple: {
    image: namedPortfolioImages.beaverFlowers,
    title: "Glowing",
    description:
      "Happy to be married? Or because they love their photographer?",
    link: "happy-wedding-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Happy Couple")),
  } as Gallery,

  lookingAtCamera: {
    image: namedPortfolioImages.abbyWintergarden,
    title: "Looking Here!",
    description:
      "It's okay to just smile into the camera like a dork sometimes",
    link: "posed-wedding-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Looking at Camera")),
  } as Gallery,

  natural: {
    image: namedPortfolioImages.rozGian,
    title: "We Just Found Them Like That!",
    description: "(jk we made them do that)",
    link: "natural-wedding-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Natural Couple")),
  } as Gallery,

  silly: {
    image: namedPortfolioImages.mimiPartying,
    title: "Silly Stuff",
    description: "These generally aren't dry weddings",
    link: "silly-wedding-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Silly")),
  } as Gallery,
};

export const allGalleries: Gallery[] = [
  galleries.favorites,
  galleries.kids,
  galleries.field,
  galleries.rowdyDancing,
  galleries.animals,
  galleries.parentDances,
  galleries.rings,
  galleries.speeches,
  galleries.wintergarden,
  galleries.firstDances,
  galleries.grandFinales,
  galleries.ravenwood,
  galleries.otherDetails,
  galleries.flowers,
  galleries.extraCheese,
  galleries.processionals,
  galleries.blackAndWhite,
  galleries.gettingReady,
  galleries.gallagher,
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

export default galleries;
