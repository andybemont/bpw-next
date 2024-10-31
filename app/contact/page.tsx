import { Metadata } from "next";
import Header from "../ui/header/header";
import ContactContent from "../ui/contact-content/contact-content";

export const metadata: Metadata = {
  title: "Next.js",
};

export default function Page() {
  return <ContactContent />;
}
