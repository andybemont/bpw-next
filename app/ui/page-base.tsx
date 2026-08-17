import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import FavoritesCarousel from "./shared/favorites-carousel";
import { ContactProvider } from "./contact/contact-provider";

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
    <ContactProvider autoOpen={autoOpenContact}>
      <Header h1Text={h1Text} h2Text={h2Text} />
      <main className="relative">
        <article>{children}</article>
      </main>
      {showFavoritesCarousel ? <FavoritesCarousel /> : null}
      <Footer h1Text={h1Text} />
    </ContactProvider>
  );
}
