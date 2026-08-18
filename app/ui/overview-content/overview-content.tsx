import Image from "next/image";
import Link from "next/link";
import namedPortfolioImages from "@/app/lib/named-portfolio-images";
import { getLocationContent, LocationKey } from "@/app/lib/location-content";
import UtilityLinks from "../shared/utility-links";

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
              <h1 className="font-display text-[clamp(3.25rem,5.2vw,5.9rem)] font-medium leading-[0.96] tracking-[-0.045em] text-balance">
                <span className="block">Photographs that capture the fun.</span>
                <span className="mt-4 block">
                  Photographers who don’t get in the way of it.
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="px-6 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12 lg:hidden">
          <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-primary-600">
            Rochester · Buffalo · The Finger Lakes
          </p>
          <h1 className="max-w-2xl font-display text-[clamp(2.65rem,11.5vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.045em] text-balance">
            <span className="block">Photographs that capture the fun.</span>
            <span className="mt-4 block">
              Photographers who don’t get in the way of it.
            </span>
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:gap-24 lg:pt-24">
        <h2 className="max-w-4xl font-display text-[clamp(2.2rem,4.6vw,5rem)] font-medium leading-[1.04] tracking-[-0.035em] text-balance">
          Your wedding should feel like a wedding, not a photo shoot.
        </h2>
        <div className="max-w-xl space-y-6 self-end text-base leading-7 text-primary-700 sm:text-lg sm:leading-8">
          <p>
            We’re Bemont Photo, a family team of wedding photographers. We
            deliver beautiful, natural photographs without making your
            wedding—or anything leading up to it—more complicated than it needs
            to be.
          </p>
          <p>
            We pay attention and photograph what’s happening without slowing
            it down. When it’s time for portraits and family pictures, we give
            clear direction, work efficiently, and get you back to your guests.
          </p>
          <UtilityLinks
            className="pt-2"
            primaryHref="/faq"
            primaryLabel="Common Questions"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 sm:pb-32">
        <div className="relative aspect-[5/3] overflow-hidden bg-primary-100">
          <Image
            src={namedPortfolioImages.kidsWithDog.image.src}
            alt={namedPortfolioImages.kidsWithDog.alt}
            fill
            sizes="(max-width: 1280px) calc(100vw - 3rem), 1280px"
            className="object-cover object-center"
          />
        </div>
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
              nearly the entire day. It matters that we’re pleasant company—and
              after more than 200 weddings without seeing a “crisis” that
              couldn’t be solved, we’re a calm, practical, and light-hearted
              presence.
            </p>
            <p>
              We also truly love doing this. We still show off to each other
              when we know we just captured an absolute banger. We love the
              crying dads, the allegedly “shy” bridesmaid who turns out to be
              unhinged on the dance floor, and the old folks who arrive an hour
              early because this is the highlight of their year. Weddings are a
              joy. We love being part of them.
            </p>
          </div>
          <UtilityLinks
            className="mt-8"
            primaryHref="/team"
            primaryLabel="Meet the Team"
          />
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
          <div className="lg:col-start-2">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#66858a]">
              The photographs
            </p>
            <h2 className="max-w-4xl font-display text-[clamp(2.5rem,5vw,5.6rem)] font-medium leading-[1.02] tracking-[-0.04em] text-balance">
              Beautiful. Not trendy.
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-7 text-primary-700 sm:text-lg sm:leading-8">
              <p>
                There’s nothing wrong with giving photographs “a look,” but
                fashionable editing puts an expiration date on them. We’re
                proud that this site includes photographs from every year we’ve
                been in business. We can do that because vibrant, true-to-life
                color never goes out of style.
              </p>
              <p>
                The same philosophy guides how we photograph the day. We don’t
                recreate whatever poses happen to be popular this year. Most of
                the day is candid. When we do step in, the pictures should still
                feel natural. We want people to look at your photos and think,
                “What a great moment”—not, “What a cool photographer.”
              </p>
            </div>
            <UtilityLinks
              className="mt-8"
              primaryHref="/gallery"
              primaryLabel="Explore the Galleries"
            />
          </div>
        </div>

        <div className="grid gap-10 pt-20 sm:pt-28 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-24">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#a85235]">
              The practical stuff
            </p>
            <h2 className="max-w-4xl font-display text-[clamp(2.6rem,5.2vw,5.8rem)] font-medium leading-[1.01] tracking-[-0.04em] text-balance">
              Everything else should be easy, too.
            </h2>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <div className="space-y-5 text-base leading-7 text-primary-700">
              <p>
                We keep the logistics simple. Booking, contracts, payments,
                planning, and gallery delivery can all be handled online. We
                publish pricing because you shouldn’t need a consultation just
                to find out what something costs. We’re flexible about payment
                timing and method.
              </p>
              <p>
                We’re organized, insured, and prepared. We arrive early with
                backup equipment, keep your photographs backed up in multiple
                places, and deliver your complete gallery within 30 days—usually
                sooner. We don’t like work piling up, and you don’t like waiting.
              </p>
            </div>
            <UtilityLinks
              className="mt-8"
              primaryHref="/pricing"
              primaryLabel="See What’s Included"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
