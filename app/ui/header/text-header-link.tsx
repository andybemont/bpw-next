import Link from "next/link";
import { HeaderLink } from "@/app/ui/header/header-content";

interface TextHeaderLinkProps {
  link: HeaderLink;
}

const TextHeaderLink = (props: TextHeaderLinkProps) => {
  const { link } = props;
  return (
    <Link
      className={`grow pb-1 text-center transition-all border-b-2 border-transparent hover:border-blue-950 hidden ${link.minSizeToShow}:block`}
      key={link.tag}
      href={link.url}
      target={link.url.startsWith("http") ? "_blank" : ""}
    >
      {link.tooltip}
    </Link>
  );
};

export default TextHeaderLink;
