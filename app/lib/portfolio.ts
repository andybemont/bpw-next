import manifest from "./portfolio-manifest.json";

export type PortfolioImageData = {
  src: string;
  width: number;
  height: number;
};

export type PortfolioImage = {
  id: string;
  image: PortfolioImageData;
  alt: string;
  keywords: string[];
  caption: string;
  venue: string;
  rating: number;
};

type ManifestEntry = {
  id: string;
  filename: string;
  width: number;
  height: number;
  alt: string;
  keywords: string[];
  caption: string;
  venue: string;
  rating: number;
};

function toPortfolioImage(entry: ManifestEntry): PortfolioImage {
  return {
    id: entry.id,
    image: {
      src: `/portfolio/${entry.filename}`,
      width: entry.width,
      height: entry.height,
    },
    alt: entry.alt,
    keywords: entry.keywords,
    caption: entry.caption,
    venue: entry.venue,
    rating: entry.rating,
  };
}

const portfolioById = new Map<string, PortfolioImage>(
  (manifest as ManifestEntry[]).map((entry) => [entry.id, toPortfolioImage(entry)]),
);

export function getPortfolioImage(id: string): PortfolioImage {
  const image = portfolioById.get(id);
  if (!image) {
    throw new Error(`Unknown portfolio image id: ${id}`);
  }
  return image;
}

export const allPortfolioImages: PortfolioImage[] = (
  manifest as ManifestEntry[]
).map(toPortfolioImage);

export default portfolioById;
