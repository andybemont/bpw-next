import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import FavoritesCarousel from "./shared/favorites-carousel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Rochester Wedding Photography by Bemont Photo | Packages and Availability",
  description:
    "Learn all about the family photography team capturing weddings across Western New York. Explore packages, prices, and availability, and all the other details you need.",
  alternates: {
    canonical: "https://www.bemontphoto.com",
  },
};

export default function PageBase({
  h1Text,
  h2Text,
  autoOpenContact,
  showFavoritesCarousel = true,
  children,
}: {
  h1Text: string;
  h2Text: string;
  autoOpenContact?: boolean;
  showFavoritesCarousel?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header h1Text={h1Text} h2Text={h2Text} />
      <main className="relative">
        <article>{children}</article>
      </main>
      {showFavoritesCarousel ? <FavoritesCarousel /> : null}
      <Footer h1Text={h1Text} autoOpenContact={autoOpenContact} />
    </>
  );
}
