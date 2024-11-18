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
    link: "favorites",
  },
  {
    image: namedPortfolioImages.kidsAtPicnicTable,
    title: "Kids Being Kids",
    description: 'Why you might say "yes" to children at your wedding',
    link: "kids",
  },
  {
    image: namedPortfolioImages.gcvm,
    title: "In The Weeds",
    description: "Top Tip: Get married by a pretty field",
    link: "fields",
  },
  {
    image: namedPortfolioImages.buttDancing,
    title: "Dance Party",
    description: "When we leave our dignity back at the table",
    link: "dancing",
  },
  {
    image: namedPortfolioImages.kidsWithDog,
    title: "Furry Friends",
    description: "Because animals are people, too",
    link: "animals",
  },
  {
    image: namedPortfolioImages.conorAndRenee,
    title: "Parent Dances",
    description: "Because parents are people, too",
    link: "parents",
  },
  {
    image: namedPortfolioImages.ringShot,
    title: "Hot Ice",
    description: "Ring shots are actually our favorite part",
    link: "rings",
  },
  {
    image: namedPortfolioImages.dadJokeSpeech,
    title: "Speeches",
    description: "You probably weren't ready to eat yet, anyway",
    link: "speeches",
  },
];

export default galleries;
