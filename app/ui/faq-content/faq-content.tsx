import { faqContent } from "../../lib/faqs";
import PartialPanel from "../shared/partialPanel";

export default function FaqContent() {
  let count = 0;

  return (
    <PartialPanel className="sm:w-[45%]">
      <section>
        <h2 className="text-2xl font-bold">
          Common Wedding Photography Questions
        </h2>
        <h3 className="">Everything You Need To Know About Bemont Photo</h3>
        <hr className="h-1 mb-2 bg-primary-800 border-0 " />
        {faqContent.map((q) => {
          return (
            <p key={++count} className="text-sm">
              <span className="font-bold">{q.question}</span>
              <span className=""> - {q.answer}</span>
            </p>
          );
        })}
      </section>
    </PartialPanel>
  );
}
