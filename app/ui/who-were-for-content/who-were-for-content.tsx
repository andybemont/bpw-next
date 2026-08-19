import CheckAvailabilityCta from "../shared/check-availability-cta";

const pairs = [
  ["Calm and practical", "Always crying and screaming"],
  ["Makes family pictures quick and painless", "Belittles your grandparents"],
  [
    "Gives clear, useful direction",
    "Just points a camera at you and mutters “Oh my God” a lot",
  ],
  [
    "Makes you feel comfortable and confident",
    "Asks “Is that what you’re wearing?” right before you walk down the aisle",
  ],
  [
    "Captures the small details",
    "Keeps dipping a pinkie into the wedding cake and thinks it’s cute?",
  ],
  ["Genuinely enjoys weddings", "Hates weddings—and puppies"],
  [
    "Great wedding-day company",
    "Calls things that aren’t food “delicious”",
  ],
  [
    "Notices the small moments happening around you",
    "Just takes selfies all day",
  ],
  [
    "Delivers your gallery within 30 days",
    "Probably doesn’t even have a real camera",
  ],
  [
    "Leaves you with lasting memories of a beautiful day",
    "Leaves with a bunch of your stuff",
  ],
] as const;

function VerdictMark({ verdict }: { verdict: "good" | "bad" }) {
  const isGood = verdict === "good";

  return (
    <span
      aria-hidden="true"
      className={`flex size-9 shrink-0 items-center justify-center rounded-full sm:size-10 ${
        isGood ? "bg-[#526b4b] text-white" : "bg-[#a64f3b] text-white"
      }`}
    >
      {isGood ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M12 6v12M6 12h12" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M6 12h12" />
        </svg>
      )}
    </span>
  );
}

export default function WhoWereForContent() {
  return (
    <section className="text-primary-900">
      <div className="border-y border-primary-300/60">
        <div className="hidden grid-cols-2 border-b border-primary-300/60 text-xs font-medium uppercase tracking-[0.18em] sm:grid">
          <span className="bg-[#dfe8da] px-8 py-5 text-[#40543b]">
            Bemont Photo
          </span>
          <span className="border-l border-primary-300/60 bg-[#f0dcd6] px-8 py-5 text-[#8f3f2f]">
            The Competition
          </span>
        </div>
        {pairs.map(([forText, notForText]) => (
          <article
            key={forText}
            className="grid border-b border-primary-300/50 last:border-b-0 sm:grid-cols-2"
          >
            <div className="bg-[#edf2ea] px-5 py-7 sm:px-8 sm:py-9">
              <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#40543b] sm:hidden">
                Bemont Photo
              </p>
              <div className="flex items-start gap-4 sm:gap-5">
                <VerdictMark verdict="good" />
                <h2 className="max-w-xl pt-1 font-display text-2xl font-medium leading-[1.08] sm:text-[2rem]">
                  {forText}
                </h2>
              </div>
            </div>
            <div className="border-primary-300/60 bg-[#f7e9e5] px-5 py-7 sm:border-l sm:px-8 sm:py-9">
              <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#8f3f2f] sm:hidden">
                The Competition
              </p>
              <div className="flex items-start gap-4 sm:gap-5">
                <VerdictMark verdict="bad" />
                <p className="max-w-xl pt-1 font-display text-2xl font-medium leading-[1.08] text-primary-700 sm:text-[2rem]">
                  {notForText}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto max-w-4xl pb-10 pt-16 text-center sm:pb-16 sm:pt-24">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#a85235]">
          A difficult decision
        </p>
        <h2 className="font-display text-[clamp(2.8rem,5vw,5.2rem)] font-medium leading-[1.01] tracking-[-0.04em] text-balance">
          The choice is yours.
        </h2>
        <p className="mx-auto mb-8 mt-6 max-w-2xl text-base leading-7 text-primary-700 sm:text-lg sm:leading-8">
          Some couples prefer calm, experienced photographers who take
          beautiful pictures and behave appropriately around desserts. Some
          don’t. There is no wrong answer.
        </p>
        <CheckAvailabilityCta fullWidthOnMobile />
        <p className="mt-10 text-[0.65rem] leading-5 tracking-[0.04em] text-primary-500">
          Comparison based entirely on vibes. No competing photographers were
          contacted for comment.
        </p>
      </div>
    </section>
  );
}

export function WhoWereForHero() {
  return (
    <header>
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#a85235]">
        A useful little compatibility test
      </p>
      <h1 className="font-display text-[clamp(3.2rem,5vw,5.8rem)] font-medium leading-[0.94] tracking-[-0.05em] text-balance">
        A good fit matters more than a good sales pitch.
      </h1>
      <p className="mt-7 max-w-lg text-base leading-7 text-primary-700 sm:text-lg sm:leading-8">
        Choosing photographers means comparing more than portfolios. To make
        your decision easier, we’ve prepared an objective and rigorously
        researched comparison.
      </p>
    </header>
  );
}
