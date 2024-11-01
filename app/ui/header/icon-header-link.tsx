import NamedIcon from "./named-icon";
import Link from "next/link";
import { HeaderLink } from "@/app/lib/header-content";

interface IconHeaderLinkProps {
  link: HeaderLink;
}

const IconHeaderLink = (props: IconHeaderLinkProps) => {
  const { link } = props;
  return (
    <div className={`grow pb-1 text-center`}>
      <Link
        key={link.tag}
        href={link.url}
        target={link.url.startsWith("http") ? "_blank" : ""}
      >
        <NamedIcon icon={link} />
      </Link>
    </div>
  );
};

export default IconHeaderLink;
