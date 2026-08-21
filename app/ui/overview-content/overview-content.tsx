import Image from "next/image";
import Link from "next/link";
import namedPortfolioImages from "@/app/lib/named-portfolio-images";
import type { PortfolioImage } from "@/app/lib/portfolio";
import { getLocationContent, LocationKey } from "@/app/lib/location-content";
import UtilityLinks from "../shared/utility-links";
import CheckAvailabilityCta from "../shared/check-availability-cta";

export default function OverviewContent({
  locationKey,
  heroImage: heroImageOverride,
}: {
  locationKey: LocationKey;
  heroImage?: PortfolioImage;
}) {
  const location = getLocationContent(locationKey);
  const heroImage = heroImageOverride ?? location.heroImage;

  return (
    <div className="text-primary-900">
      <section className="relative">
        <div className="relative aspect-[4/3] min-h-[21rem] w-full overflow-hidden bg-primary-100 sm:aspect-[16/9] lg:h-[calc(100svh-5.75rem)] lg:min-h-[42rem] lg:aspect-auto">
          <Image
            src={heroImage.image.src}
            alt={heroImage.alt}
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
          It’s a wedding, not a photo shoot.
        </h2>
        <div className="max-w-xl space-y-6 self-end text-base leading-7 text-primary-700 sm:text-lg sm:leading-8">
          <p>
            Photography shouldn’t become another part of the wedding you have
            to manage. We keep the planning straightforward, answer questions
            plainly, and don’t create work for you just to prove we’re doing
            ours.
          </p>
          <p>
            Most of the day, we follow what’s happening rather than stopping
            it. When it’s time for portraits and family pictures, we take
            charge, work quickly, and get you back to your guests.
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
            src={namedPortfolioImages.aliciaField.image.src}
            alt={namedPortfolioImages.aliciaField.alt}
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
            After more than 200 weddings, very little rattles us.
          </h2>
          <div className="mt-8 max-w-lg space-y-5 text-base leading-7 text-primary-700 sm:text-lg sm:leading-8">
            <p>
              Unlike most of your wedding vendors, we’ll be with you all day.
              The fact that we’re utterly delightful isn’t some trivial
              bonus—it’s critical. You get our great jokes when things are going
              perfectly, and you get our calm and experience when they aren’t.
            </p>
            <p>
              We truly love doing this. We still show off to each other
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
            src={namedPortfolioImages.lovelyHolly.image.src}
            alt={namedPortfolioImages.lovelyHolly.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-[43%_center]"
          />
        </div>
      </section>

      <section className="relative min-h-[70svh] overflow-hidden bg-primary-950 sm:min-h-[78svh]">
        <Image
          src={namedPortfolioImages.totoAfrica.image.src}
          alt={namedPortfolioImages.totoAfrica.alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
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

        <div className="relative mt-20 aspect-[16/9] overflow-hidden bg-primary-100 sm:mt-28">
          <Image
            src={namedPortfolioImages.maisonDance.image.src}
            alt={namedPortfolioImages.maisonDance.alt}
            fill
            sizes="(max-width: 1280px) calc(100vw - 3rem), 1280px"
            className="object-cover object-center"
          />
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
                to find out what something costs.
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

      <section className="bg-[#a85235] px-6 py-20 text-primary-50 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-24">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-primary-100/80">
              Your turn
            </p>
            <h2 className="max-w-4xl font-display text-[clamp(2.8rem,5.5vw,6rem)] font-medium leading-[0.98] tracking-[-0.04em] text-balance">
              We’ve said enough. Tell us about your wedding.
            </h2>
          </div>
          <div>
            <p className="max-w-lg text-base leading-7 text-primary-50/85 sm:text-lg sm:leading-8">
              Start with your date and the basics. We’ll tell you whether we’re
              free and take it from there.
            </p>
            <CheckAvailabilityCta
              className="mt-8 sm:justify-start"
              source="homepage_closing"
              fullWidthOnMobile
            />
          </div>
        </div>
      </section>
    </div>
  );
}
