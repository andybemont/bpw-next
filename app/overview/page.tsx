import { Metadata } from "next";
import Header from "../ui/header/header";
import OverviewContent from "../ui/overview-content/overview-content";

export const metadata: Metadata = {
  title: "Next.js",
};

export default function Page() {
  return <OverviewContent />;
}
