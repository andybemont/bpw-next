"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderLink } from "@/app/lib/header-content";

export default function TextHeaderLink(props: { link: HeaderLink }) {
  const { link } = props;
  const pathname = usePathname();
  const isExternal = link.url.startsWith("http");
  const isActive = !isExternal
    ? link.url === "/"
      ? pathname === "/"
      : pathname.startsWith(link.url)
    : false;
  const linkClass = "text-sm px-2";

  if (isActive) {
    return (
      <span className={linkClass} aria-current="page">
        {link.tooltip}
      </span>
    );
  }

  return (
    <Link key={link.tag} href={link.url} target={isExternal ? "_blank" : ""}>
      <span className={linkClass}>{link.tooltip}</span>
    </Link>
  );
}
