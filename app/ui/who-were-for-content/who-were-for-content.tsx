import CheckAvailabilityCta from "../shared/check-availability-cta";

const pairs = [
  ["Great photographs and a genuinely great day", "A wedding run like a production"],
  ["Moments noticed", "Moments manufactured"],
  ["Time with the people you invited", "Hours disappearing into portraits"],
  ["Pinterest as inspiration", "Pinterest as a shot-by-shot reenactment"],
  ["Joy, even when something is imperfect", "A referendum on whether the day was flawless"],
  ["Clear guidance when it helps", "Constant direction and micromanagement"],
  ["Calm, competence, and efficiency", "Hype, theatrics, or a photographer doubling as a content machine"],
];

export default function WhoWereForContent() {
  return (
    <section className="text-primary-900">
      <div className="border-t border-primary-300/60 py-10 sm:py-16">
        <div className="hidden grid-cols-[4rem_1fr_1fr] gap-8 border-b border-primary-300/60 pb-4 text-xs font-medium uppercase tracking-[0.18em] text-primary-500 sm:grid">
          <span />
          <span>We’re for</span>
          <span>Probably not for</span>
        </div>
        {pairs.map(([forText, notForText], index) => (
          <article key={forText} className="grid gap-5 border-b border-primary-300/50 py-8 sm:grid-cols-[4rem_1fr_1fr] sm:gap-8 sm:py-10">
            <p className="text-xs font-medium tracking-[0.16em] text-[#66858a]">0{index + 1}</p>
            <div>
              <p className="mb-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-primary-500 sm:hidden">We’re for</p>
              <h2 className="font-display text-2xl font-medium leading-tight sm:text-3xl">{forText}</h2>
            </div>
            <div>
              <p className="mb-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-primary-500 sm:hidden">Probably not for</p>
              <p className="text-base leading-7 text-primary-600 sm:text-lg sm:leading-8">{notForText}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto max-w-4xl pb-10 pt-12 text-center sm:pb-16 sm:pt-20">
        <p className="mb-8 font-display text-[clamp(2.4rem,5vw,5rem)] font-medium leading-[1.03] tracking-[-0.04em] text-balance">If you kept nodding, there is an excellent chance we’ll get along.</p>
        <CheckAvailabilityCta fullWidthOnMobile />
      </div>
    </section>
  );
}

export function WhoWereForHero() {
  return <header><p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#a85235]">A useful little compatibility test</p><h1 className="font-display text-[clamp(3.2rem,5vw,5.8rem)] font-medium leading-[0.94] tracking-[-0.05em] text-balance">A good fit matters more than a good sales pitch.</h1><p className="mt-7 max-w-lg text-base leading-7 text-primary-700 sm:text-lg sm:leading-8">Photography is subjective. So is the experience of having photographers around all day. Here is the clearest version of what we value—and what we don’t pretend to be.</p></header>;
}
