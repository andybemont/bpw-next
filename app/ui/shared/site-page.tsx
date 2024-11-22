import { PortfolioImage } from "@/app/lib/best-ofs";
import Image from "next/image";

export default function SitePage(props: {
  image?: PortfolioImage;
  children: React.ReactNode;
  positioning?: string;
  priority?: boolean;
}) {
  const { image, children, positioning, priority } = props;
  return (
    <>
      <div className="hidden sm:block">
        <div className="absolute top-0 left-0 bg-primary-50 w-screen h-screen">
          {image && (
            <Image
              src={image.image}
              alt={image.alt}
              priority={priority}
              className={`w-screen h-screen object-cover ${positioning} z-0`}
            />
          )}
          <div className="absolute left-0 top-[84px] m-6 w-[calc(100vw-48px)] h-[calc(100vh-84px-48px)] z-1">
            {children}
          </div>
        </div>
      </div>

      <div className="block sm:hidden">
        <div className="absolute top-[64px] left-0 w-screen h-screen">
          <div className="w-full flex flex-row justify-center">{children}</div>
        </div>
      </div>
    </>
  );
}
