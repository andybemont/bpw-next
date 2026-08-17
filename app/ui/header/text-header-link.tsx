"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderLink } from "@/app/lib/header-content";

export default function TextHeaderLink(props: { link: HeaderLink }) {
  const { link } = props;
  const pathname = usePathname();
  const isExternal = link.url.startsWith("http");
  const isActive =
    !isExternal &&
    (link.url === "/"
      ? pathname === "/" || pathname.startsWith("/wedding-photography")
      : pathname.startsWith(link.url));
  const linkClass = "text-sm px-2";

  if (isActive) {
    return (
      <span className={linkClass} aria-current="page">
        {link.tooltip}
      </span>
    );
  }

  return (
    <Link href={link.url} target={isExternal ? "_blank" : undefined}>
      <span className={linkClass}>{link.tooltip}</span>
    </Link>
  );
}
