import { NamedImage } from "@/app/lib/portfolio";
import FullBackgroundContainer from "./full-background-container";

interface SitePageProps {
  image: NamedImage;
  children: React.ReactNode;
}

export default function SitePage(props: SitePageProps) {
  const { image, children } = props;
  return (
    <main>
      <FullBackgroundContainer image={image}>
        {children}
      </FullBackgroundContainer>
    </main>
  );
}
