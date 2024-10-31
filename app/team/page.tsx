import { Metadata } from "next";
import Header from "../ui/header/header";
import TeamContent from "../ui/team-content/team-content";

export const metadata: Metadata = {
  title: "Next.js",
};

export default function Page() {
  return <TeamContent />;
}
