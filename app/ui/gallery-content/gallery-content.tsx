"use client";
import Image from "next/image";
import { fullPortfolio } from "@/app/lib/portfolio";
import { useRef, useState, useEffect } from "react";

export default function GalleryContent() {
  const [targetPhotoHeight, setTargetPhotoHeight] = useState(1);
  const [targetPhotoWidth, setTargetPhotoWidth] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);

  const handleResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight - 84 - 32;
    const photoAspectRatio = 1.5;
    const containerAspectRatio = width / height;

    if (containerAspectRatio > photoAspectRatio) {
      // Container is wider than our image - use all height and constrain width
      setTargetPhotoHeight(height);
      setTargetPhotoWidth(height * photoAspectRatio);
    } else {
      // Use all width and constrain height
      setTargetPhotoWidth(width);
      setTargetPhotoHeight(width / photoAspectRatio);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let count = 0;
  return (
    <div className="w-full max-w-screen mx-auto flex">
      <div className="grow" />
      <div>
        {fullPortfolio.map((p) => {
          return (
            <Image
              key={++count}
              src={p.src}
              alt="Gallery Image"
              className="pt-4"
              width={targetPhotoWidth}
              height={targetPhotoHeight}
              loading="lazy"
            />
          );
        })}
      </div>
      <div className="grow" />
    </div>
  );
}
