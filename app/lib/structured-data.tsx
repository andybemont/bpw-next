import { SITE_URL, toAbsoluteImageUrl } from "./seo";
import businessInfo from "./business-info";

const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: businessInfo.openingHours.days,
    opens: businessInfo.openingHours.opens,
    closes: businessInfo.openingHours.closes,
  },
];

const areaServed = businessInfo.serviceAreas.map((area) => ({
  "@type": "Place" as const,
  name: area,
}));

export const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Photographer"],
  "@id": `${SITE_URL}/#business`,
  name: businessInfo.name,
  alternateName: businessInfo.legalName,
  url: SITE_URL,
  image: toAbsoluteImageUrl("/portfolio/bemont-photo-230916191334.jpg"),
  logo: toAbsoluteImageUrl("/portfolio/bemont-photo-230916191334.jpg"),
  description: businessInfo.description,
  foundingDate: businessInfo.foundingDate,
  priceRange: businessInfo.priceRange,
  areaServed,
  openingHoursSpecification,
  sameAs: [
    businessInfo.socialProfiles.instagram,
    businessInfo.socialProfiles.facebook,
  ],
  knowsAbout: [
    "Wedding photography",
    "Engagement photography",
    "Rochester wedding photography",
  ],
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: businessInfo.legalName,
  alternateName: businessInfo.name,
  url: SITE_URL,
  publisher: {
    "@id": `${SITE_URL}/#business`,
  },
};

export const pricingStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wedding Photography Package",
  provider: {
    "@id": `${SITE_URL}/#business`,
  },
  areaServed: businessInfo.serviceAreas,
  description:
    "Six hours of wedding photography with two photographers, planning support, natural editing, and an online gallery.",
  offers: {
    "@type": "Offer",
    price: "3200",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/pricing`,
  },
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function breadcrumbStructuredData(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path ? `${SITE_URL}/${item.path.replace(/^\//, "")}` : SITE_URL,
    })),
  };
}

export function galleryStructuredData(props: {
  title: string;
  description: string;
  slug: string;
  imagePath: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: props.title,
    description: props.description,
    url: `${SITE_URL}/galleries/${props.slug}`,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@type": "Thing",
      name: "Wedding photography",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: toAbsoluteImageUrl(props.imagePath),
    },
  };
}

export function JsonLd(props: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(props.data) }}
    />
  );
}
