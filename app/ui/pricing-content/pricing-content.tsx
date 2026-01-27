import Link from "next/link";
import CheckAvailabilityCta from "../shared/check-availability-cta";

export default function PricingContent() {
  return (
    <section className="space-y-8 text-primary-900">
      <div className="space-y-2">
        <h1 className="text-sm font-medium text-primary-700">Pricing</h1>
        <p className="text-2xl sm:text-3xl font-semibold text-pretty">
          Wedding Photography is $4,200. Our single package covers everything
          needed for most weddings.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-base font-semibold">
            8 hours of wedding day coverage
          </h2>
          <p className="text-base leading-relaxed text-primary-800">
            This covers the story for most weddings. We’ll get the portraits and
            family formals, as well as all the candid moments that tell the real
            story of your day. Extended coverage is available.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-base font-semibold">Two photographers</h2>
          <p className="text-base leading-relaxed text-primary-800">
            We work as a{" "}
            <Link
              href="/team"
              className="underline decoration-primary-300/80 underline-offset-4"
            >
              team
            </Link>
            . That means more candids, more angles on the big moments, and more
            flexibility because one of us can be with each of you when it
            matters.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-base font-semibold">Engagement session</h2>
          <p className="text-base leading-relaxed text-primary-800">
            A relaxed session before the wedding so you get comfortable in front
            of the camera and we get to know you. The session is absolutely
            optional, but it’s a great way to feel more relaxed on your wedding
            day. The beautiful photos are just an added bonus.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-base font-semibold">
            Planning and support, start to finish
          </h2>
          <p className="text-base leading-relaxed text-primary-800">
            Great planning means great results. From the day you book until the
            wedding, we’re always available to you. Whether it’s about the
            photography itself, your wedding day timeline, or just general
            questions about what we’ve seen work best over the years, we’ll help
            you plan a day that lets you focus on the fun without the stress.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-base font-semibold">
            Online gallery with high-resolution downloads and print rights
          </h2>
          <p className="text-base leading-relaxed text-primary-800">
            A private, easy-to-use gallery for viewing, sharing, and downloading
            your photos. Physical prints are not included but your gallery will
            have convenient links to order through professional labs we trust.
            You are always welcome to download and print your images elsewhere.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-base font-semibold">
            Natural editing and fast delivery
          </h2>
          <p className="text-base leading-relaxed text-primary-800">
            We deliver photos with careful, consistent editing on every
            delivered image and an emphasis on natural, timeless color and skin
            tones. No outsourcing or trendy filters.
          </p>
          <p className="text-base leading-relaxed text-primary-800">
            You’ll receive sneak peeks within a few days and your full gallery
            within 30 days.
          </p>
        </div>
      </div>

      <div className="space-y-4 border-t border-primary-200/70 pt-4 text-primary-800">
        <h2 className="text-base font-semibold text-primary-900">
          A few more details:
        </h2>
        <ul className="space-y-3 text-base leading-relaxed list-disc pl-5">
          <li>
            We’re based in Rochester and don’t charge for wedding day travel
            within about 90 minutes. This comfortably covers Buffalo, Syracuse,
            and most of the Finger Lakes region.
          </li>
          <li>
            While our package covers most wedding needs, yours may be different
            - we’re happy to discuss adjustments
          </li>
          <li>
            We guarantee six months of cloud storage for your gallery. In
            practice we host them permanently, but you should still download
            your own copy for long-term safekeeping.
          </li>
          <li>
            Engagement sessions can be scheduled any time between booking and
            your wedding day. Some couples do them early, others closer to the
            wedding. Pick a season you like and we’ll make it work! Give us
            about a month of lead time to ensure we can find a good date for
            you.
          </li>
          <li>
            Travel for your engagement session is not included. We invite you to
            join us in scenic Monroe Country.
          </li>
          <li>
            A $1,000 deposit is required to hold your date. The remaining
            balance is due before we begin editing and delivering your photos.
          </li>
          <li>
            We prefer payments via Venmo because it’s simple and fee-free, but
            we’re flexible and can accommodate other payment methods if needed.
          </li>
          <li>
            Deposits are non-refundable. If your wedding is rescheduled and
            we’re available on the new date, we’re happy to apply your original
            deposit and honor your original pricing.
          </li>
        </ul>
      </div>
      <CheckAvailabilityCta className="pt-2" />
    </section>
  );
}
