import Link from "next/link";
import { HeaderLink } from "@/app/lib/header-content";

export default function TextHeaderLink(props: {
  link: HeaderLink;
  hideBasedOnSize: boolean;
}) {
  const { link, hideBasedOnSize } = props;

  return (
    <Link
      key={link.tag}
      href={link.url}
      target={link.url.startsWith("http") ? "_blank" : ""}
    >
      {link.tooltip}
    </Link>
  );
}
