import Link from "next/link";
import CheckAvailabilityCta from "../shared/check-availability-cta";
import ClosingPhoto from "../shared/closing-photo";
import namedPortfolioImages from "@/app/lib/named-portfolio-images";

const inclusions = [
  ["Your first six hours", "Enough coverage for a lot of wedding days, with a clear way to add time if yours needs it."],
  ["Two photographers", "More candid moments, both sides of the story, and the flexibility to be in two places without making the timeline perform gymnastics."],
  ["Planning that earns its keep", "Timeline help, practical answers, and a final sanity check from people who have watched more than 200 wedding days actually unfold."],
  ["A complete high-resolution gallery", "Carefully edited photographs, full personal printing rights, easy sharing and downloads, plus professional print ordering when you want it."],
  ["Fast, natural editing", "Sneak peeks within a few days and the full gallery within 30 days—usually sooner. True-to-life color. No trendy filters."],
  ["Easy to add later", "Extra coverage is $350 per hour, and an engagement session is $300. Neither needs to be decided when you book."],
];

export default function PricingContent() {
  return (
    <section className="text-primary-900">
      <div className="grid border-y border-primary-300/60 sm:grid-cols-2 lg:grid-cols-3">
        {inclusions.map(([title, description], index) => (
          <article key={title} className={`border-primary-300/50 py-10 sm:px-8 sm:py-12 ${index % 2 === 0 ? "sm:border-r" : ""} ${index % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"} ${index >= 3 ? "border-t" : index >= 2 ? "sm:border-t lg:border-t-0" : "border-t sm:border-t-0"}`}>
            <p className="mb-5 text-xs font-medium tracking-[0.16em] text-[#66858a]">0{index + 1}</p>
            <h2 className="font-display text-3xl font-medium leading-tight">{title}</h2>
            <p className="mt-4 text-base leading-7 text-primary-700">{description}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#a85235]">The useful fine print</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight sm:text-5xl">No tiny type required.</h2>
        </div>
        <div className="grid gap-x-12 gap-y-7 text-base leading-7 text-primary-700 sm:grid-cols-2">
          <p>Wedding-day travel is included within 45 minutes of Rochester. Beyond that, travel is a flat $225.</p>
          <p>A $1,000 non-refundable deposit and online contract hold your date. The balance is due before editing and delivery begin.</p>
          <p>An engagement session is a $300 add-on. You can add it any time after booking, so there is no need to decide now.</p>
          <p>The package fits most weddings, but weddings are not issued from a factory. If yours needs an adjustment, we’ll talk about it plainly.</p>
          <p>Extra coverage is $350 per hour, and it can be added later once your timeline starts to take shape.</p>
          <p>We guarantee six months of gallery hosting and usually keep galleries online indefinitely. You should still download your own copy, because responsible adults have backups.</p>
        </div>
      </div>

      <ClosingPhoto image={namedPortfolioImages.ceremonyCrowdKiss} />
      <div className="grid gap-8 bg-[#e8e3d7] px-6 py-9 sm:px-10 sm:py-11 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-16">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#53604b]">First question</p>
          <h2 className="max-w-3xl font-display text-[clamp(2.5rem,5vw,5.2rem)] font-medium leading-[1.02] tracking-[-0.04em] text-balance">Are we free when you need us?</h2>
        </div>
        <div className="lg:justify-self-end">
          <CheckAvailabilityCta fullWidthOnMobile />
          <Link href="/faq" className="editorial-link mt-5 inline-block text-sm font-medium">Read the gloriously thorough FAQ</Link>
        </div>
      </div>
    </section>
  );
}

export function PricingHero() {
  return <header><p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#a85235]">Straightforward on purpose</p><h1 className="font-display text-[clamp(3.2rem,5vw,5.8rem)] font-medium leading-[0.94] tracking-[-0.05em] text-balance">A complete place to start.</h1><p className="mt-7 font-display text-[clamp(2.8rem,4vw,4.6rem)] font-medium leading-none tracking-[-0.04em]">$3,200</p><p className="mt-5 max-w-md text-base leading-7 text-primary-700">Your first six hours, two photographers, planning, editing, and a complete gallery—without a pricing maze designed to make the starting number look fictional.</p></header>;
}
