import { Gallery } from "../../gallery/galleries";
import { allPortfolioImages } from "../../lib/best-ofs";
import SitePage from "../../ui/shared/site-page";
import Image from "next/image";

export default function Page(props: {
  gallery: Gallery;
  text: React.ReactNode;
}) {
  const { gallery, text } = props;

  var count = 0;
  return (
    <SitePage>
      <div className="mt-[-30px] flex flex-col justify-center text-center">
        <h3 className="font-bold text-3xl">{gallery.title}</h3>
        <h4>{gallery.description}</h4>
        {text}
        <ul className=" w-full h-full flex flex-row flex-wrap justify-center">
          {gallery.filter(allPortfolioImages).map((image) => {
            return (
              <li key={++count} className="mx-1 mt-1 p-1 pb-2 w-[392px]">
                <Image
                  src={image.image}
                  alt={image.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "392px", height: "auto" }} // optional
                />
                <h5 className="text-center text-sm">{image.caption}</h5>
              </li>
            );
          })}
        </ul>
      </div>
    </SitePage>
  );
}
