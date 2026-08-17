import Link from "next/link";
import PageBase from "@/app/ui/page-base";

export default function NotFound() {
  return (
    <PageBase h1Text="Bemont Photo Wedding Photography" h2Text="">
      <main className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-sm font-medium text-primary-700">404</h1>
        <p className="mt-2 text-2xl font-semibold text-primary-900">
          That page doesn&apos;t exist
        </p>
        <p className="mt-3 text-primary-700">
          The link may be outdated or the page may have moved during our site
          refresh.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex rounded-full border border-primary-900/40 px-5 py-2 text-sm font-semibold text-primary-900 transition hover:border-primary-900 hover:bg-primary-50"
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className="inline-flex rounded-full border border-primary-900/40 px-5 py-2 text-sm font-semibold text-primary-900 transition hover:border-primary-900 hover:bg-primary-50"
          >
            Pricing
          </Link>
          <Link
            href="/gallery"
            className="inline-flex rounded-full border border-primary-900/40 px-5 py-2 text-sm font-semibold text-primary-900 transition hover:border-primary-900 hover:bg-primary-50"
          >
            Galleries
          </Link>
          <Link
            href="/?contact=1"
            className="inline-flex rounded-full border border-primary-900/40 px-5 py-2 text-sm font-semibold text-primary-900 transition hover:border-primary-900 hover:bg-primary-50"
          >
            Check availability
          </Link>
        </div>
      </main>
    </PageBase>
  );
}
