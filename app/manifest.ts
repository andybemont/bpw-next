import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/app/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} Wedding Photography`,
    short_name: SITE_NAME,
    description:
      "Rochester wedding photographers serving Western New York, Buffalo, and the Finger Lakes.",
    start_url: "/",
    display: "browser",
    background_color: "#f8fafc",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/portfolio/bemont-photo-230916191334.jpg",
        sizes: "192x128",
        type: "image/jpeg",
      },
    ],
  };
}
