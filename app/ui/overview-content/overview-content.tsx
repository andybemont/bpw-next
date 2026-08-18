import Image from "next/image";
import Link from "next/link";
import namedPortfolioImages from "@/app/lib/named-portfolio-images";
import { getLocationContent, LocationKey } from "@/app/lib/location-content";
import CheckAvailabilityCta from "../shared/check-availability-cta";
import ExplorablePhoto from "../shared/explorable-photo";

const storyImages = [
  namedPortfolioImages.kidsWithDog,
  namedPortfolioImages.dadJokeSpeech,
  namedPortfolioImages.mimiPartying,
  namedPortfolioImages.kacieVeilKiss,
  namedPortfolioImages.amandaFirstDance,
];

export default function OverviewContent({
  locationKey,
}: {
  locationKey: LocationKey;
}) {
  const location = getLocationContent(locationKey);

  return (
    <div className="pb-8 text-primary-900 sm:pb-16">
      <section className="relative">
        <div className="relative aspect-[4/3] min-h-[21rem] w-full overflow-hidden bg-primary-100 sm:aspect-[16/9] lg:h-[calc(100svh-5.75rem)] lg:min-h-[42rem] lg:aspect-auto">
          <Image
            src={location.heroImage.image.src}
            alt={location.heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_center] sm:object-center"
          />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-[#1d211c]/50 via-[#1d211c]/8 to-transparent lg:block" />
          <div className="absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-[#1d211c]/25 to-transparent lg:block" />

          <div className="absolute inset-y-0 left-0 hidden w-[52%] items-center px-[max(3rem,calc((100vw-80rem)/2))] lg:flex">
            <div className="max-w-[39rem] text-primary-50 drop-shadow-[0_2px_14px_rgb(0_0_0/0.26)]">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em]">
                Rochester · Buffalo · The Finger Lakes
              </p>
              <h1 className="font-display text-[clamp(3.7rem,6.5vw,7.4rem)] font-medium leading-[0.94] tracking-[-0.045em] text-balance">
                Photographs that remember how it felt.
              </h1>
            </div>
          </div>
        </div>

        <div className="px-6 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12 lg:hidden">
          <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-primary-600">
            Rochester · Buffalo · The Finger Lakes
          </p>
          <h1 className="max-w-2xl font-display text-[clamp(2.85rem,13vw,5rem)] font-medium leading-[0.98] tracking-[-0.045em] text-balance">
            Photographs that remember how it felt.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:gap-24 lg:pt-24">
        <h2 className="max-w-4xl font-display text-[clamp(2.2rem,4.6vw,5rem)] font-medium leading-[1.04] tracking-[-0.035em] text-balance">
          Your wedding should feel like a wedding, not a photo shoot.
        </h2>
        <div className="max-w-xl space-y-6 self-end text-base leading-7 text-primary-700 sm:text-lg sm:leading-8">
          <p>
            We pay attention, anticipate what matters, and photograph what is
            actually happening without slowing it down. When it’s time for
            portraits and family formals, we give clear direction, work
            efficiently, and get you back to your guests.
          </p>
          <p>
            Staying out of the way doesn’t mean leaving you wondering what to
            do. When direction helps, we give it clearly. When everything is
            already going beautifully, we let it happen.
          </p>
          <Link href="/who-were-for" className="editorial-link inline-block font-medium text-primary-900">
            See if we sound like your people
          </Link>
        </div>
      </section>

      <section className="pb-20 sm:pb-32">
        <ExplorablePhoto images={storyImages} />
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 sm:px-8 sm:pb-36 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5 lg:col-start-2">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#a85235]">
            Good company all day
          </p>
          <h2 className="font-display text-[clamp(2.4rem,4.5vw,4.7rem)] font-medium leading-[1.02] tracking-[-0.035em] text-balance">
            We take the work seriously. Ourselves, somewhat less so.
          </h2>
          <div className="mt-8 max-w-lg space-y-5 text-base leading-7 text-primary-700 sm:text-lg sm:leading-8">
            <p>
              Unlike most of your wedding vendors, we’ll be with you for
              nearly the entire day. It matters that we are pleasant company—and
              very difficult to rattle. After more than 200 weddings, we still
              haven’t met a crisis that couldn’t be solved.
            </p>
            <p>
              We also truly love doing this. We’re always sidling up to each
              other during weddings to show off something wonderful—or
              hilariously unflattering—on the back of a camera. A big hug from
              happy, sweaty newlyweds remains our favorite way to end the night.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden bg-primary-100 lg:col-span-5 lg:col-start-7">
          <Image
            src={namedPortfolioImages.kacieDip.image.src}
            alt={namedPortfolioImages.kacieDip.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-right"
          />
        </div>
      </section>

      <section className="relative min-h-[70svh] overflow-hidden bg-primary-950 sm:min-h-[78svh]">
        <Image
          src={namedPortfolioImages.lydiaFlowers.image.src}
          alt={namedPortfolioImages.lydiaFlowers.alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-32">
        <div className="grid gap-12 border-b border-primary-300/60 pb-20 sm:pb-28 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#66858a]">
            The photographs
          </p>
          <div>
            <h2 className="max-w-4xl font-display text-[clamp(2.5rem,5vw,5.6rem)] font-medium leading-[1.02] tracking-[-0.04em] text-balance">
              Real, flattering, and made to last.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-7 text-primary-700 sm:text-lg sm:leading-8">
              Our editing is natural but careful, with true-to-life color that
              won’t go out of style. This site includes photographs from every
              year we have been in business; we want you to see the work we
              actually deliver, not just whatever happens to match the current
              trend.
            </p>
            <Link href="/gallery" className="editorial-link mt-7 inline-block font-medium">
              Wander through the galleries
            </Link>
          </div>
        </div>

        <div className="grid gap-10 pt-20 sm:pt-28 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-24">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#a85235]">
              Wedding photography from $4,200
            </p>
            <h2 className="max-w-4xl font-display text-[clamp(2.6rem,5.2vw,5.8rem)] font-medium leading-[1.01] tracking-[-0.04em] text-balance">
              If this sounds like what you want, we’d love to hear what you’re planning.
            </h2>
          </div>
          <div className="max-w-md lg:justify-self-end">
            <p className="mb-7 text-base leading-7 text-primary-700">
              Most weddings include two photographers, an engagement session,
              and a high-resolution online gallery. We’ll also help you build
              a sensible timeline and choose enough coverage without making
              photography the main event.
            </p>
            <CheckAvailabilityCta source={`location_${locationKey}_primary`} fullWidthOnMobile />
            <Link href="/pricing" className="editorial-link mt-5 inline-block text-sm font-medium">
              See what’s included
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
