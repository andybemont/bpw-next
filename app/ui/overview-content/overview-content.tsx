import React from "react";
import reasons from "../../lib/reasons";
import PartialPanel from "../shared/partialPanel";

export default function OverviewContent({ location }: { location: string }) {
  var count = 0;

  return (
    <PartialPanel className="sm:w-[40%]">
      <section className="text-sm">
        <h2 className="font-title text-2xl font-bold">
          {location} Wedding Photography
        </h2>
        <h3 className="font-title text-lg font-bold">by Bemont Photo</h3>
        <hr className="h-1 mb-2 bg-primary-800 border-0 " />
        <p className="grow pb-4">
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
