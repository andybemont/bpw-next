import { Metadata } from "next";
import WelcomeContent from "./ui/welcome-content/welcome-content";
import TeamContent from "./ui/team-content/team-content";
import OverviewContent from "./ui/overview-content/overview-content";
import FaqContent from "./ui/faq-content/faq-content";
import PricingContent from "./ui/pricing-content/pricing-content";
import ContactContent from "./ui/contact-content/contact-content";
import "react-tooltip/dist/react-tooltip.css";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography by Bemont Photo",
};

export default function Page() {
  return (
    <main>
      <WelcomeContent />
      <OverviewContent />
      <TeamContent />
      <FaqContent />
      <PricingContent />
      <ContactContent />
    </main>
  );
}
