import { faqContent } from "../../lib/faqs";
import PartialPanel from "../shared/partialPanel";

export default function FaqContent() {
  let count = 0;

  return (
    <PartialPanel>
      <h3 className="font-title text-4xl font-bold">Common Questions</h3>
      <h4 className="text-xl font-title">Everything You Need To Know</h4>
      <hr className="h-1 mb-2 bg-primary-800 border-0 " />
      {faqContent.map((q) => {
        return (
          <h5 key={++count}>
            <span className="font-bold">{q.question}</span>
            <span className="relative"> - {q.answer}</span>
          </h5>
        );
      })}
    </PartialPanel>
  );
}
