import React from "react";
import reasons from "./reasons";

export default function OverviewContent() {
  var count = 0;

  return (
    <div className="text-blue-950 p-2 tracking-wide max-h-full">
      <h3 className="font-title text-4xl font-bold">Wedding Photography</h3>
      <p className="grow py-4 font-title">
        Bemont Photo is a small family business providing wedding photography to
        Rochester, Buffalo, the Finger Lakes, and the rest of Western NY! We
        strive to capture every great moment and beautiful detail from your
        entire day so you'll have those memories forever. In addition to
        delivering great images, we're guaranteed to be the easiest part of your
        wedding planning; we're flexible, friendly, and easy to book with online
        contracts and payment. Get in touch today!
      </p>
      {reasons.map((reason) => {
        return (
          <span key={++count}>
            <h4>
              <span className="font-bold">{reason.title}</span>
              <span className="relative"> - {reason.blurb}</span>
            </h4>
          </span>
        );
      })}
    </div>
  );
}
