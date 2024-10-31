import NamedIcon from "./named-icon";
import Link from "next/link";
import { HeaderLink } from "@/app/lib/header-content";

interface TextHeaderLinkProps {
  link: HeaderLink;
}

const TextHeaderLink = (props: TextHeaderLinkProps) => {
  const { link } = props;
  return (
    <div className="grow pb-1 text-center">
      <Link
        key={link.tag}
        href={link.url}
        target={link.url.startsWith("http") ? "_blank" : ""}
      >
        <span>{link.tooltip}</span>
      </Link>
    </div>
  );
};

export default TextHeaderLink;
