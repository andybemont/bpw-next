import { faqContent } from "../../lib/faqs";
import PartialPanel from "../shared/partialPanel";

export default function FaqContent() {
  let count = 0;

  return (
    <PartialPanel>
      <section>
        <h2 className="font-title text-4xl font-bold">
          Common Wedding Photography Questions
        </h2>
        <h3 className="text-xl font-title">
          Everything You Need To Know About Bemont Photo
        </h3>
        <hr className="h-1 mb-2 bg-primary-800 border-0 " />
        {faqContent.map((q) => {
          return (
            <p key={++count}>
              <span className="font-bold">{q.question}</span>
              <span className="relative"> - {q.answer}</span>
            </p>
          );
        })}
      </section>
    </PartialPanel>
  );
}
