import { Metadata } from "next";
import FaqContent, {
  faqItems,
  infrequentlyAskedItems,
} from "../ui/faq-content/faq-content";
import namedPortfolioImages from "../lib/named-portfolio-images";
import SitePage from "../ui/shared/site-page";
import PageBase from "../ui/page-base";

const pageTitle = "Rochester Wedding Photography | FAQ";
export const metadata: Metadata = {
  title: pageTitle,
  description:
    "Everything you need to know about Rochester's favorite wedding photographers",
  alternates: {
    canonical: "https://www.bemontphoto.com/faq",
  },
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <SitePage
        image={namedPortfolioImages.kidsWithDog.big}
        positioning="object-center"
      >
        <FaqContent />
      </SitePage>
    </PageBase>
  );
}
