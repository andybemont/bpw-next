import { StaticImageData } from "next/image";
import i240616170506_small from "../../public/portfolio/bemont-photo-20240616170506-small.jpg";
import i230916191334_small from "../../public/portfolio/bemont-photo-20230916191334-small.jpg";
import i230701150750_small from "../../public/portfolio/bemont-photo-20230701150750-small.jpg";
import i230520180828_small from "../../public/portfolio/bemont-photo-20230520180828-small.jpg";
import i221009153130_small from "../../public/portfolio/bemont-photo-20221009153130-small.jpg";
import i210516145713_small from "../../public/portfolio/bemont-photo-20210516145713-small.jpg";
import i190713180705_small from "../../public/portfolio/bemont-photo-20190713180705-small.jpg";
import i190526154446_small from "../../public/portfolio/bemont-photo-20190526154446-small.jpg";

export type PortfolioImage = {
  image: StaticImageData;
  alt: string;
  keywords: string[];
  caption: string;
  venue: string;
  rating: number;
};

export const pi190526154446: PortfolioImage = {
  image: i190526154446_small,
  alt: "Couple at Hyatt in Rochester, NY | Rochester Wedding Photography",
  keywords: ["Extra Cheese"],
  caption: "Erica and Terry at Hyatt in Rochester, NY | 50 mm ¹⁄₂₅₀₀ at f/1.8",
  venue: "Hyatt",
  rating: 5,
};

export const pi190713180705: PortfolioImage = {
  image: i190713180705_small,
  alt: "Couple at Genesee Country Village in LeRoy, NY | Western New York Wedding Photography",
  keywords: ["Field"],
  caption:
    "Jessica and Thomas at Genesee Country Village in LeRoy, NY | 85 mm ¹⁄₃₂₀ at f/1.4",
  venue: "Genesee Country Village",
  rating: 5,
};

export const pi210516145713: PortfolioImage = {
  image: i210516145713_small,
  alt: "Couple at Delaware Park in Buffalo, NY | Buffalo Wedding Photography",
  keywords: ["Looking at Camera"],
  caption:
    "Lydia and Jon at Delaware Park in Buffalo, NY | 85 mm ¹⁄₁₆₀₀ at f/1.8",
  venue: "Delaware Park",
  rating: 5,
};

export const pi221009153130: PortfolioImage = {
  image: i221009153130_small,
  alt: "Couple Kissing at The Gallagher in Medina, NY | Western New York Wedding Photography",
  keywords: ["Extra Cheese"],
  caption:
    "Alex and Anna at The Gallagher in Medina, NY | 85 mm ¹⁄₅₀₀₀ at f/1.8",
  venue: "The Gallagher",
  rating: 5,
};

export const pi230520180828: PortfolioImage = {
  image: i230520180828_small,
  alt: "First Dance at Acqua in Buffalo, NY | Buffalo Wedding Photography",
  keywords: ["First Dance"],
  caption: "Kacie and Jim at Acqua in Buffalo, NY | 50 mm ¹⁄₂₀₀ at f/2.2",
  venue: "Acqua",
  rating: 5,
};

export const pi230701150750: PortfolioImage = {
  image: i230701150750_small,
  alt: "Kids with Dog at Keuka Brewing Co in Keuka, NY | Finger Lakes Wedding Photography",
  keywords: ["Animals", "Kids"],
  caption:
    "Chelsea and Mark at Keuka Brewing Co in Keuka, NY | 50 mm ¹⁄₁₆₀₀ at f/1.8",
  venue: "Keuka Brewing Co",
  rating: 5,
};

export const pi230916191334: PortfolioImage = {
  image: i230916191334_small,
  alt: "Couple at Wren's Roost in Naples, NY | Finger Lakes Wedding Photography",
  keywords: ["Field"],
  caption:
    "Alicia and Sean at Wren's Roost in Naples, NY | 35 mm ¹⁄₂₅₀ at f/1.8",
  venue: "Wren's Roost",
  rating: 5,
};

export const pi240616170506: PortfolioImage = {
  image: i240616170506_small,
  alt: "Rings at Fig Hollow in Palmyra, NY | Rochester Wedding Photography",
  keywords: ["Rings"],
  caption: "Matt and Nora at Fig Hollow in Palmyra, NY | 40 mm ¹⁄₂₀₀ at f/5.0",
  venue: "Fig Hollow",
  rating: 5,
};
