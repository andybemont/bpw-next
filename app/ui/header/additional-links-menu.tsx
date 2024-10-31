import { allHeaderLinks } from "../../lib/header-content";
import Link from "next/link";

const AdditionalLinksMenu = () => {
  return (
    <nav>
      <ul>
        {allHeaderLinks.map((link) => {
          return (
            <li key={link.tag}>
              <Link
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : ""}
              >
                {link.tooltip}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default AdditionalLinksMenu;
