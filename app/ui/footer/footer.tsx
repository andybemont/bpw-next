import React from "react";

export const MenuHeight = "128px";

export default function Footer({ h1Text }: { h1Text: string }) {
  return (
    <footer>
      <div className="fixed bottom-0 text-center text-balance transition-all flex-wrap justify-center flex flex-row w-screen bg-black/60 z-10 text-white text-xs">
        <h1 className="mr-1">{h1Text}</h1>

        <p className="mr-1">
          Wedding Photography in{" "}
          <a href="/wedding-photography/rochester-ny">Rochester, NY</a>,{" "}
          <a href="/wedding-photography/buffalo-ny">Buffalo, NY</a>,{" "}
          <a href="/wedding-photography/finger-lakes">the Finger Lakes</a>, and
          the rest of{" "}
          <a href="/wedding-photography/western-ny">Western New York</a>
        </p>

        <address className="not-italic">
          <span className="mr-1">
            <a href="mailto:andy@bemontphoto.com">andy@bemontphoto.com</a>
          </span>
          <span className="mr-1">
            <a href="tel:+158589005570">(585) 590-0570</a>
          </span>
        </address>

        <p>Copyright &copy; 2025</p>
      </div>
    </footer>
  );
}
