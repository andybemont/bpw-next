import React from "react";
import CheckAvailabilityCta from "../shared/check-availability-cta";

export default function OverviewContent({ location }: { location: string }) {
  return (
    <section className="space-y-6 text-primary-900">
      <div className="space-y-3">
        <h1 className="text-sm font-medium text-primary-700">
          {location} Wedding Photography by Bemont Photo
        </h1>
        <p className="text-2xl sm:text-3xl font-semibold text-pretty">
          Wedding photography for people who want beautiful photos of an
          effortless day
        </p>
      </div>

      <div className="space-y-4 text-base leading-relaxed">
        <p>
          We’re a Rochester-based team for couples who want their day
          photographed without it being run like a photo shoot. We pay
          attention, anticipate what matters, and capture what’s actually
          happening without slowing it down. And when it’s time for portraits
          and family formals, we work efficiently and get you to your guests.
        </p>
        <p>
          We take the work seriously, but we truly love it. We’re always sidling
          up to each other during wedding days to show off amazing (or
          hilariously unflattering) shots on the back of the camera. After 200
          weddings, Andy still feels a real thrill when he finishes editing a
          beautiful wedding and takes a final pass through the gallery. Carly
          still swoons when the reception space is full of her engagement photos
          and guests are gushing about them. And a big end-of-the-night hug from
          happy, sweaty newlyweds is our favorite sign-off.
        </p>
        <p>
          Unlike most of your vendors, your photographer is with you all day.
          You need somebody who diffuses anxiety, not amplifies it. We’ve still
          never witnessed a “crisis” that couldn’t be solved, so we’re very hard
          to stress out. Combined with the sensible timeline we’ll help you
          build, it’ll be an easy day.
        </p>
        <p>
          We’re there, but we stay out of the way when things are unfolding.
          When direction helps, we give it clearly and efficiently. Our editing
          follows the same approach: natural but careful, with true-to-life
          color that won’t go out of style. Our site features pictures from
          every year we've been in business, because we don't provide content -
          we provide a complete story of your day that feels real, flattering,
          and lasting.
        </p>
        <p>
          Wedding photography is $4,200 for most weddings. That includes wedding
          day coverage from two photographers, an engagement session, an online
          gallery of high-resolution images, and all the help you need to ensure
          a day that’s about fun, not work.
        </p>
        <p>
          Based in Rochester. Happily serving couples throughout the Finger
          Lakes, Buffalo, and Western New York.
        </p>
        <CheckAvailabilityCta className="pt-4" />
      </div>
    </section>
  );
}
