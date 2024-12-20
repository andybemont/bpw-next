import { Gallery, allGalleries } from "../../lib/galleries";
import { allPortfolioImages } from "../../lib/best-ofs";
import { mainText } from "@/app/ui/fonts";
import Image from "next/image";
import GLink from "./g-link";
import PageBase from "../page-base";

export default function GalleryPage(props: {
  gallery: Gallery;
  text?: string;
}) {
  const { gallery, text } = props;

  // Figure out the next gallery so we can make a link to it
  var nextGallery: Gallery | null = null;
  var nextGalleryIndex = allGalleries.indexOf(gallery) + 1;
  while (nextGallery === null) {
    if (nextGalleryIndex >= allGalleries.length) {
      nextGalleryIndex = 0;
    }
    var candidate = allGalleries[nextGalleryIndex] as Gallery;
    if (candidate && candidate.link) {
      nextGallery = candidate;
      break;
    }
    nextGalleryIndex++;
  }

  // Get the list of pictures for this gallery, sorted so landscapes are first (lazy but reasonably effective for now)
  var pictureList = gallery.filter(allPortfolioImages);
  pictureList = pictureList.sort(
    (p1, p2) =>
      p1.image.height / p1.image.width - p2.image.height / p2.image.width
  );

  // We're doing this twice, so save it
  const callToAction = (
    <>
      <p>
        We would love to see you and your people in{" "}
        <GLink a={"../gallery"}>our galleries</GLink>! If you like our pictures
        and think we might be the right photographers for your wedding day,{" "}
        <GLink a={"../contact"}>get in touch</GLink>! While you're waiting for a
        prompt reply, you can <GLink a={"../team"}>learn more about us</GLink>,{" "}
        <GLink a={"../pricing"}>price out your perfect package</GLink>, and read
        more about <GLink a={"../"}>why we're a great choice</GLink> (not that
        we're biased).
      </p>
      {nextGallery && (
        <p className="mt-4 text-2xl">
          Or just{" "}
          <GLink a={"../galleries/" + nextGallery.link}>
            look at another gallery!
          </GLink>
        </p>
      )}
    </>
  );

  var count = 0;
  return (
    <PageBase
      h1Text="Bemont Photo Wedding Photography"
      h2Text="Galleries & Inspo"
    >
      <div
        className={`absolute top-0 left-0 ${gallery.colorTailwind} ${mainText.className} tracking-tighter w-screen`}
      >
        <div className="mt-[96px] w-full flex flex-col justify-around text-center px-1">
          <section>
            <div className="max-w-[600px] mx-auto px-2">
              <h2 className="text-5xl pb-2 text-pretty">{gallery.title}</h2>
              <h3
                className={`text-3xl py-2 border-y-2 ${gallery.colorTailwind} text-pretty`}
              >
                {gallery.description}
              </h3>
              <div className="text-justify my-4">
                {text && <p>{text}</p>}
                {callToAction}
              </div>
            </div>
          </section>

          <section>
            <ul className=" w-full h-full flex flex-row flex-wrap justify-center">
              {pictureList.map((image) => {
                return (
                  <li key={++count} className="mx-1 mt-1 py-1 min-w-[392px]">
                    <Image
                      src={image.image}
                      alt={image.alt}
                      loading={count <= 8 ? "eager" : "lazy"}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        maxWidth: "600px",
                        height: "auto",
                      }} // optional
                    />
                    <p className="text-center text-sm">{image.caption}</p>
                  </li>
                );
              })}
            </ul>
          </section>

          <section>
            <div
              className={`max-w-[600px] mx-auto px-2 border-y-2 ${gallery.colorTailwind} my-4`}
            >
              <div className="text-justify my-1">{callToAction}</div>
            </div>
          </section>
        </div>
      </div>
    </PageBase>
  );
}
