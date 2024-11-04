import { NamedImage } from "@/app/lib/portfolio";
import FullBackgroundContainer from "./full-background-container";

export default function SitePage(props: {
  image?: NamedImage;
  children: React.ReactNode;
}) {
  const { image, children } = props;
  return (
    <FullBackgroundContainer image={image}>{children}</FullBackgroundContainer>
  );
}
