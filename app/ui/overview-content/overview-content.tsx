import Link from "next/link";
import CheckAvailabilityCta from "../shared/check-availability-cta";
import FavoritesCarousel from "../shared/favorites-carousel";
import PhotoBreak from "../shared/photo-break";
import {
  getLocationContent,
  LocationKey,
  sharedPricingLine,
} from "@/app/lib/location-content";
import { getOverviewPhotoBreak } from "@/app/lib/overview-photo-breaks";

export default function OverviewContent({
  locationKey,
}: {
  locationKey: LocationKey;
}) {
  const location = getLocationContent(locationKey);

  return (
    <section className="space-y-8 text-primary-900">
      <h1 className="text-sm font-medium text-primary-700">
        {location.h1Location} Wedding Photography by Bemont Photo
      </h1>

      <div className="space-y-4 text-base leading-relaxed">
        <p className="max-w-prose">
          We’re a Rochester-based team for couples who want their day
          photographed without it being run like a photo shoot. We pay
          attention, anticipate what matters, and capture what’s actually
          happening without slowing it down. And when it’s time for portraits
          and family formals, we work efficiently and get you to your guests.
        </p>
        <p className="max-w-prose">
          We take the work seriously, but we truly love it. We’re always sidling
          up to each other during wedding days to show off amazing (or
          hilariously unflattering) shots on the back of the camera. After 200
          weddings, Andy still feels a real thrill when he finishes editing a
          beautiful wedding and takes a final pass through the gallery. Carly
          still swoons when the reception space is full of her engagement photos
          and guests are gushing about them. And a big end-of-the-night hug from
          happy, sweaty newlyweds is our favorite sign-off.
        </p>
        <p className="max-w-prose">
          Unlike most of your vendors, your photographer is with you all day.
          You need somebody who diffuses anxiety, not amplifies it. We’ve still
          never witnessed a “crisis” that couldn’t be solved, so we’re very hard
          to stress out. Combined with the sensible timeline we’ll help you
          build, it’ll be an easy day.
        </p>
        <p className="max-w-prose">
          We’re there, but we stay out of the way when things are unfolding.
          When direction helps, we give it clearly and efficiently. Our editing
          follows the same approach: natural but careful, with true-to-life
          color that won’t go out of style. Our site features pictures from
          every year we&apos;ve been in business, because we don&apos;t provide
          content—we provide a complete story of your day that feels real,
          flattering, and lasting.
        </p>
      </div>

      <div className="-mx-6 sm:-mx-8">
        <FavoritesCarousel priorityActiveImage />
      </div>

      <p className="max-w-prose text-base font-medium leading-relaxed md:text-lg">
        {sharedPricingLine}
      </p>

      <CheckAvailabilityCta
        source={`location_${locationKey}_primary`}
        fullWidthOnMobile
      />

      <div className="space-y-4 border-t border-primary-200/70 pt-8 text-base leading-relaxed">
        <p className="max-w-prose text-2xl font-semibold text-pretty sm:text-3xl">
          {location.tagline}
        </p>
        {location.localParagraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="max-w-prose">
            {paragraph}
          </p>
        ))}
        <p className="max-w-prose">{location.closingLine}</p>
        {locationKey === "western-ny" ? (
          <p className="max-w-prose">
            Looking for something more specific?{" "}
            <Link
              href="/wedding-photography/rochester-ny"
              className="underline decoration-primary-300/80 underline-offset-4"
            >
              Rochester
            </Link>
            ,{" "}
            <Link
              href="/wedding-photography/buffalo-ny"
              className="underline decoration-primary-300/80 underline-offset-4"
            >
              Buffalo
            </Link>
            , and{" "}
            <Link
              href="/wedding-photography/finger-lakes"
              className="underline decoration-primary-300/80 underline-offset-4"
            >
              Finger Lakes
            </Link>{" "}
            each have their own page with more detail.
          </p>
        ) : null}
      </div>

      <PhotoBreak
        images={getOverviewPhotoBreak(0)}
        className="-mx-6 sm:-mx-8"
      />
      <PhotoBreak
        images={getOverviewPhotoBreak(1)}
        className="-mx-6 sm:-mx-8"
      />
      <PhotoBreak
        images={getOverviewPhotoBreak(2)}
        className="-mx-6 sm:-mx-8"
      />
      <PhotoBreak
        images={getOverviewPhotoBreak(3)}
        className="-mx-6 sm:-mx-8"
      />

      <CheckAvailabilityCta
        className="pt-2"
        source={`location_${locationKey}`}
        fullWidthOnMobile
      />
    </section>
  );
}
