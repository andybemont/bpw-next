import React from "react";
import reasons from "../../lib/reasons";
import PartialPanel from "../shared/partialPanel";

export default function OverviewContent({ location }: { location: string }) {
  var count = 0;

  return (
    <PartialPanel>
      <section>
        <h2 className="font-title text-4xl font-bold">
          {location} Wedding Photography
        </h2>
        <hr className="h-1 mb-2 bg-primary-800 border-0 " />
        <p className="grow pb-4 font-title">
          Bemont Photo is a small family photography team doing great wedding
          photography in Rochester, Buffalo, the Finger Lakes, and the rest of
          Western NY! We'll capture every great moment and detail so you'll
          remember your day forever.
        </p>
        {reasons.map((reason) => {
          return (
            <span key={++count}>
              <h3 className="font-bold inline">{reason.title}</h3>
              <span className="relative"> - {reason.blurb}</span>
              <br />
            </span>
          );
        })}
      </section>
    </PartialPanel>
  );
}
