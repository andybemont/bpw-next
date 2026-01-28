import Link from "next/link";
import CheckAvailabilityCta from "../shared/check-availability-cta";

const pairs = [
  {
    forText:
      "We're for couples who care about having great photos, but care just as much about having a great day",
    notForText: "Not those who want their wedding to be a production",
  },
  {
    forText: "We're for people who want moments noticed, not manufactured",
    notForText: "Not those who want their wedding staged like a styled shoot",
  },
  {
    forText: "We're for couples who want to have fun with their guests",
    notForText: "Not those who want to disappear for hours of portraits",
  },
  {
    forText: "We're for brides who use Pinterest for ideas, not as a checklist",
    notForText: "Not those who want to recreate other weddings",
  },
  {
    forText: "We're for people who want their wedding to be joyful",
    notForText:
      "Not those who see their wedding as a referendum on who they are",
  },
  {
    forText:
      "We're for couples who want guidance when it helps, and space when it doesn’t",
    notForText: "Not those who want constant direction or micromanagement",
  },
  {
    forText:
      "We're for folks who value calm, competence, and efficiency over hype and theatrics",
    notForText:
      "Not those who want their photographer racing around or multitasking as a content creator",
  },
];

export default function WhoWereForContent() {
  return (
    <section className="space-y-5 text-primary-900">
      <h1 className="text-sm font-medium text-primary-700">
        Who We’re For (and Not For)
      </h1>

      <h2 className="text-2xl sm:text-3xl font-semibold text-pretty">
        A good fit matters.
      </h2>

      <div className="space-y-5">
        {pairs.map((pair) => (
          <div key={pair.forText} className="space-y-0.5">
            <p className="text-base font-semibold text-primary-900">
              {pair.forText}
            </p>
            <p className="text-base leading-relaxed text-primary-700">
              {pair.notForText}
            </p>
          </div>
        ))}
      </div>
      <CheckAvailabilityCta className="pt-2" />
    </section>
  );
}
