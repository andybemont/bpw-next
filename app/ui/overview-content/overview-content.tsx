import React from "react";
import reasons from "../../lib/reasons";
import PartialPanel from "../shared/partialPanel";

export default function OverviewContent() {
  var count = 0;

  return (
    <PartialPanel>
      <h1 className="font-title text-4xl font-bold">
        Rochester Wedding Photography
      </h1>
      <hr className="h-1 mb-2 bg-primary-800 border-0 " />
      <h2 className="grow pb-4 font-title">
        Bemont Photo is a small family photography team doing great wedding
        photography in Rochester, Buffalo, the Finger Lakes, and the rest of
        Western NY! We'll capture every great moment and detail so you'll
        remember your day forever.
      </h2>
      {reasons.map((reason) => {
        return (
          <span key={++count}>
            <h3>
              <span className="font-bold">{reason.title}</span>
              <span className="relative"> - {reason.blurb}</span>
            </h3>
          </span>
        );
      })}
    </PartialPanel>
  );
}
