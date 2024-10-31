import { Metadata } from "next";
import Header from "../ui/header/header";
import PricingContent from "../ui/pricing-content/pricing-content";

export const metadata: Metadata = {
  title: "Next.js",
};

export default function Page() {
  return <PricingContent />;
}
