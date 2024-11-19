import { PortfolioImage, namedPortfolioImages } from "../lib/best-ofs";

type Gallery = {
  image: PortfolioImage;
  title: string;
  description: string;
  link: string;
};

const galleries: Gallery[] = [
  {
    image: namedPortfolioImages.hyattDip,
    title: "Our Favorites",
    description:
      "Some of Bemont Photo's most memorable wedding pictures since 2018",
    link: "favorite-wedding-photos",
  },
  {
    image: namedPortfolioImages.kidsAtPicnicTable,
    title: "Kids Being Kids",
    description: 'Why you might say "yes" to children at your wedding',
    link: "kids-at-weddings",
  },
  {
    image: namedPortfolioImages.gcvm,
    title: "In The Weeds",
    description: "Top Tip: Get married by a pretty field",
    link: "photos-in-fields",
  },
  {
    image: namedPortfolioImages.buttDancing,
    title: "Dance Party",
    description: "When we leave our dignity back at the table",
    link: "dancing-photos",
  },
  {
    image: namedPortfolioImages.kidsWithDog,
    title: "Furry Friends",
    description: "Because animals are people, too",
    link: "animal-photos",
  },
  {
    image: namedPortfolioImages.conorAndRenee,
    title: "Parent Dances",
    description: "Because parents are people, too",
    link: "parent-dance-photos",
  },
  {
    image: namedPortfolioImages.ringShot,
    title: "Hot Ice",
    description: "Ring shots are actually our favorite part",
    link: "wedding-ring-photos",
  },
  {
    image: namedPortfolioImages.dadJokeSpeech,
    title: "Speeches",
    description: "You probably weren't ready to eat yet, anyway",
    link: "wedding-speech-photos",
  },
  {
    image: namedPortfolioImages.wintergardenFirstDance,
    title: "Featured Venue: The Wintergarden",
    description: "Downtown Rochester, NY",
    link: "wintergarden-wedding-photos",
  },
  {
    image: namedPortfolioImages.amandaFirstDance,
    title: "First Dances",
    description: "Dance like literally everyone is watching",
    link: "first-dance-photos",
  },
  {
    image: namedPortfolioImages.ravenwoodFirstKiss,
    title: "Grand Finales",
    description: "When you're finally actually married",
    link: "first-kiss-and-recessionals",
  },
  {
    image: namedPortfolioImages.kenseyParentDance,
    title: "Featured Venue: Ravenwood",
    description: "Victor, NY",
    link: "ravenwood-wedding-photos",
  },
  {
    image: namedPortfolioImages.lemonTable,
    title: "Clothes and Decor",
    description: "Nice pictures of nice things by nice photographers",
    link: "wedding-decor",
  },
  {
    image: namedPortfolioImages.bouquetHandHold,
    title: "Flowers",
    description: "The latest must-have wedding fad",
    link: "wedding-flower-photos",
  },
  {
    image: namedPortfolioImages.kacieVeilKiss,
    title: "Extra Cheese",
    description: "They don't ALL have to be candid",
    link: "romantic-wedding-photos",
  },
  {
    image: namedPortfolioImages.bubblePoke,
    title: "Processionals",
    description: "Arriving in style",
    link: "processional-photos",
  },
  {
    image: namedPortfolioImages.blackAndWhiteKids,
    title: "Black & White",
    description: "When the moment is better than the light",
    link: "black-and-white-wedding-photos",
  },
  {
    image: namedPortfolioImages.chelseaGettingReady,
    title: "Getting Ready",
    description: "No falsies too long",
    link: "getting-ready-photos",
  },
  {
    image: namedPortfolioImages.gallagherKiss,
    title: "Featured Venue: The Gallagher",
    description: "Medina, NY",
    link: "gallagher-wedding-photos",
  },
  {
    image: namedPortfolioImages.pabloAndRonald,
    title: "Solo Portraits",
    description: "Be ready for your close-up",
    link: "wedding-portraits",
  },
  {
    image: namedPortfolioImages.niceCake,
    title: "Dessert Time",
    description: "Don't just look at it - eat it!",
    link: "wedding-desserts",
  },
  {
    image: namedPortfolioImages.figHollowDance,
    title: "Featured Venue: Fig Hollow",
    description: "Palmyra, NY",
    link: "fig-hollow-wedding-photos",
  },
];

export default galleries;
