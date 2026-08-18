import FaqContent, {
  FaqHero,
  faqItems,
  infrequentlyAskedItems,
} from "../ui/faq-content/faq-content";
import namedPortfolioImages from "../lib/named-portfolio-images";
import SitePage from "../ui/shared/site-page";
import PageBase from "../ui/page-base";
import { buildPageMetadata } from "@/app/lib/seo";
import { JsonLd } from "@/app/lib/structured-data";

export const metadata = buildPageMetadata({
  title: "Rochester Wedding Photography FAQ | Bemont Photo",
  description:
    "Answers about wedding photography pricing, coverage, timelines, delivery, and working with Bemont Photo in Rochester and Western New York.",
  path: "faq",
});

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [...faqItems, ...infrequentlyAskedItems].map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.join("\n\n"),
    },
  })),
};

export default function Page() {
  return (
    <PageBase h1Text="Bemont Photo Wedding Photography" h2Text="">
      <JsonLd data={faqStructuredData} />
      <SitePage
        image={namedPortfolioImages.kidsWithDog}
        positioning="object-center"
        hero={<FaqHero />}
      >
        <FaqContent />
      </SitePage>
    </PageBase>
  );
}
