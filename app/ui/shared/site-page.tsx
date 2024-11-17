import { PortfolioImage } from "@/app/lib/best-ofs";
import FullBackgroundContainer from "./full-background-container";

export default function SitePage(props: {
  image?: PortfolioImage;
  children: React.ReactNode;
  positioning: string;
}) {
  const { image, children, positioning } = props;
  return (
    <FullBackgroundContainer image={image} positioning={positioning}>
      {children}
    </FullBackgroundContainer>
  );
}
