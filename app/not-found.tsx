import Link from "next/link";
import PageBase from "@/app/ui/page-base";

export default function NotFound() {
  return (
    <PageBase h1Text="Bemont Photo Wedding Photography" h2Text="">
      <main className="mx-auto flex min-h-[65vh] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-xs font-medium uppercase tracking-[0.22em] text-[#a85235]">404 · splendidly absent</h1>
        <p className="mt-5 font-display text-[clamp(3rem,7vw,6.5rem)] font-medium leading-[0.96] tracking-[-0.045em] text-primary-900">
          That page doesn&apos;t exist
        </p>
        <p className="mt-6 max-w-xl text-lg leading-8 text-primary-700">
          The link may be outdated or the page may have moved during our site
          refresh.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="editorial-link inline-flex min-h-11 items-center font-display text-lg font-medium"
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className="editorial-link inline-flex min-h-11 items-center font-display text-lg font-medium"
          >
            Pricing
          </Link>
          <Link
            href="/gallery"
            className="editorial-link inline-flex min-h-11 items-center font-display text-lg font-medium"
          >
            Galleries
          </Link>
          <Link
            href="/?contact=1"
            className="editorial-link inline-flex min-h-11 items-center font-display text-lg font-medium"
          >
            Check availability
          </Link>
        </div>
      </main>
    </PageBase>
  );
}
