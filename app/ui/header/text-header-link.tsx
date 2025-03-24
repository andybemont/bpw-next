import Link from "next/link";
import { HeaderLink } from "@/app/lib/header-content";

export default function TextHeaderLink(props: { link: HeaderLink }) {
  const { link } = props;

  return (
    <Link
      key={link.tag}
      href={link.url}
      target={link.url.startsWith("http") ? "_blank" : ""}
    >
      <span className="text-sm px-2">{link.tooltip}</span>
    </Link>
  );
}
