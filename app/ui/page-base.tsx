import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

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
      <main className="relative overflow-x-hidden">
        <article>{children}</article>
      </main>
      <Footer h1Text={h1Text} />
    </>
  );
}
