import namedPortfolioImages from "./named-portfolio-images";
import { PortfolioImage } from "./portfolio";

const breakSets: PortfolioImage[][] = [
  [namedPortfolioImages.aliciaField, namedPortfolioImages.kacieDip],
  [namedPortfolioImages.keukaFirstLook, namedPortfolioImages.gcvm],
  [namedPortfolioImages.lydiaFlowers, namedPortfolioImages.aliciaField],
  [namedPortfolioImages.kidsWithDog],
];

export function getOverviewPhotoBreak(index: number): PortfolioImage[] {
  return breakSets[index] ?? [];
}
