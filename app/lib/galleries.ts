import { PortfolioImage } from "./best-ofs";
import namedPortfolioImages from "./named-portfolio-images";

export type Gallery = {
  image: PortfolioImage;
  title: string;
  description: string;
  link: string;
  filter: (source: PortfolioImage[]) => PortfolioImage[];
  colorTailwind?: string;
};

const galleries = {
  favorites: {
    image: namedPortfolioImages.hyattDip.small,
    title: "Our Favorites",
    description: "Some of Bemont Photo's most memorable wedding pictures",
    link: "favorite-wedding-photos",
    filter: (images) => images.filter((i) => i.rating > 1),
    colorTailwind: "text-black bg-white border-red-600",
  } as Gallery,
  kids: {
    image: namedPortfolioImages.kidsAtPicnicTable,
    title: "Kids Being Kids",
    description: 'Why you might say "yes" to children at your wedding',
    link: "kids-at-weddings",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Kids")),
    colorTailwind: "text-orange-950 bg-orange-200 border-orange-800",
  } as Gallery,
  field: {
    image: namedPortfolioImages.gcvm.small,
    title: "In The Weeds",
    description: "Top Tip: Get married by a pretty field",
    link: "photos-in-fields",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Field")),
    colorTailwind: "text-amber-900 bg-amber-100 border-amber-900",
  } as Gallery,
  rowdyDancing: {
    image: namedPortfolioImages.mimiPartying,
    title: "Dance Party",
    description: "When we leave our dignity back at the table",
    link: "dancing-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Rowdy Dancing")),
    colorTailwind: "text-red-600 bg-neutral-950 border-white",
  } as Gallery,
  animals: {
    image: namedPortfolioImages.kidsWithDog.small,
    title: "Furry Friends",
    description: "Because animals are people, too",
    link: "animal-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Animals")),
    colorTailwind: "text-indigo-950 bg-indigo-200 border-indigo-950",
  } as Gallery,
  parentDances: {
    image: namedPortfolioImages.conorAndRenee,
    title: "Parent Dances",
    description: "Because parents are people, too",
    link: "parent-dance-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Parent Dance")),
    colorTailwind: "text-amber-100 bg-slate-900 border-amber-800",
  } as Gallery,
  rings: {
    image: namedPortfolioImages.ringShot.small,
    title: "Hot Ice",
    description: "Ring shots are actually our favorite part",
    link: "wedding-ring-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Rings")),
    colorTailwind: "text-rose-950 bg-rose-200 border-rose-950",
  } as Gallery,
  speeches: {
    image: namedPortfolioImages.dadJokeSpeech,
    title: "Speeches",
    description: "You probably weren't ready to eat yet, anyway",
    link: "wedding-speech-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Speeches")),
    colorTailwind: "text-orange-100 bg-sky-950 border-orange-100",
  } as Gallery,
  wintergarden: {
    image: namedPortfolioImages.wintergardenFirstDance,
    title: "Featured Venue: The Wintergarden",
    description: "Downtown Rochester, NY",
    link: "wintergarden-wedding-photos",
    filter: (images) => images.filter((i) => i.venue === "Wintergarden"),
    colorTailwind: "text-lime-950 bg-lime-50 border-lime-950",
  } as Gallery,
  firstDances: {
    image: namedPortfolioImages.amandaFirstDance,
    title: "First Dances",
    description: "Dance like literally everyone is watching",
    link: "first-dance-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "First Dance")),
    colorTailwind: "text-yellow-500 bg-zinc-950 border-yellow-500",
  } as Gallery,
  grandFinales: {
    image: namedPortfolioImages.ravenwoodFirstKiss,
    title: "Grand Finales",
    description: "When you're finally actually married",
    link: "first-kiss-and-recessionals",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Grand Finale")),
    colorTailwind: "text-stone-950 bg-stone-200 border-green-800",
  } as Gallery,
  ravenwood: {
    image: namedPortfolioImages.kenseyParentDance,
    title: "Featured Venue: Ravenwood",
    description: "Victor, NY",
    link: "ravenwood-wedding-photos",
    filter: (images) => images.filter((i) => i.venue === "Ravenwood"),
    colorTailwind: "text-amber-950 bg-amber-100 border-amber-950",
  } as Gallery,
  otherDetails: {
    image: namedPortfolioImages.lemonTable,
    title: "Clothes and Decor",
    description: "Nice pictures of nice things by nice photographers",
    link: "wedding-decor",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Other Details")),
    colorTailwind: "text-pink-100 bg-pink-900 border-pink-100",
  } as Gallery,
  flowers: {
    image: namedPortfolioImages.bouquetHandHold,
    title: "Flowers",
    description: "The latest must-have wedding fad",
    link: "wedding-flower-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Flowers")),
    colorTailwind: "text-white bg-green-950 border-white",
  } as Gallery,
  extraCheese: {
    image: namedPortfolioImages.kacieVeilKiss,
    title: "Extra Cheese",
    description: "They don't ALL have to be candid",
    link: "romantic-wedding-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Extra Cheese")),
    colorTailwind: "text-white bg-sky-950 border-white",
  } as Gallery,
  processionals: {
    image: namedPortfolioImages.bubblePoke,
    title: "Processionals",
    description: "Arriving in style",
    link: "processional-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Processional")),
    colorTailwind: "text-violet-800 bg-green-50 border-violet-800",
  } as Gallery,
  blackAndWhite: {
    image: namedPortfolioImages.blackAndWhiteKids,
    title: "Black & White",
    description: "When the moment is better than the light",
    link: "black-and-white-wedding-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Black and White")),
    colorTailwind: "text-neutral-800 bg-neutral-300 border-neutral-800",
  } as Gallery,
  gettingReady: {
    image: namedPortfolioImages.chelseaGettingReady,
    title: "Getting Ready",
    description: "When all your dangerous fasting pays off",
    link: "getting-ready-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Getting Ready")),
    colorTailwind: "text-stone-200 bg-stone-600 border-emerald-950",
  } as Gallery,
  gallagher: {
    image: namedPortfolioImages.gallagherKiss.small,
    title: "Featured Venue: The Gallagher",
    description: "Medina, NY",
    link: "gallagher-wedding-photos",
    filter: (images) => images.filter((i) => i.venue === "The Gallagher"),
    colorTailwind: "text-slate-300 bg-slate-700 border-slate-950",
  } as Gallery,
  dessert: {
    image: namedPortfolioImages.niceCake,
    title: "Dessert Time",
    description: "Don't just look at it - eat it!",
    link: "wedding-desserts",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Dessert")),
    colorTailwind: "text-orange-900 bg-violet-100 border-orange-900",
  } as Gallery,
  figHollow: {
    image: namedPortfolioImages.figHollowDance,
    title: "Featured Venue: Fig Hollow",
    description: "Palmyra, NY",
    link: "fig-hollow-wedding-photos",
    filter: (images) => images.filter((i) => i.venue === "Fig Hollow"),
    colorTailwind: "text-black bg-emerald-50 border-emerald-800",
  } as Gallery,

  otherCandids: {
    image: namedPortfolioImages.maryCovell,
    title: "Candid Moments",
    description: "We're always watching",
    link: "candid-wedding-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Other Candids")),
    colorTailwind: "text-white bg-indigo-950 border-white",
  } as Gallery,

  ceremony: {
    image: namedPortfolioImages.jennyCeremony,
    title: "The Main Event",
    description: "Supposedly the reason we're all here",
    link: "wedding-ceremony-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Ceremony")),
    colorTailwind: "text-zinc-200 bg-zinc-950 border-zinc-200",
  } as Gallery,

  firstLook: {
    image: namedPortfolioImages.keukaFirstLook,
    title: "First Looks",
    description: "...they'd better cry a lot",
    link: "first-look-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "First Look")),
    colorTailwind: "text-red-900 bg-zinc-50 border-red-800",
  } as Gallery,

  happyCouple: {
    image: namedPortfolioImages.beaverFlowers,
    title: "Glowing",
    description:
      "Happy to be married? Or because they love their photographer?",
    link: "happy-wedding-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Happy Couple")),
    colorTailwind: "text-teal-50 bg-teal-950 border-teal-50",
  } as Gallery,

  lookingAtCamera: {
    image: namedPortfolioImages.abbyWintergarden,
    title: "Looking Here!",
    description:
      "It's okay to just smile into the camera like a dork sometimes",
    link: "posed-wedding-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Looking at Camera")),
    colorTailwind: "text-sky-900 bg-sky-100 border-sky-800",
  } as Gallery,

  natural: {
    image: namedPortfolioImages.rozGian,
    title: "We Just Found Them Like That!",
    description: "(jk we made them do that)",
    link: "natural-wedding-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Natural Couple")),
    colorTailwind: "text-lime-950 bg-gray-50 border-lime-500",
  } as Gallery,

  silly: {
    image: namedPortfolioImages.buttDancing,
    title: "Silly Stuff",
    description: "They aren't taking this seriously...",
    link: "silly-wedding-photos",
    filter: (images) =>
      images.filter((i) => i.keywords.find((k) => k === "Silly")),
    colorTailwind: "text-fuchsia-900 bg-fuchsia-100 border-fuchsia-500",
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
