import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
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
  children,
}: {
  h1Text: string;
  h2Text: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header h1Text={h1Text} h2Text={h2Text} />
      <main className="relative">{children}</main>
      <Footer h1Text={h1Text} />
    </>
  );
}
