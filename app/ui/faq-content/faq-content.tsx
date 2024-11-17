import { faqContent } from "./faqs";

export default function FaqContent() {
  let count = 0;

  return (
    <div className="text-blue-950 p-2 tracking-wide max-h-full">
      <h3 className="font-title text-4xl font-bold">Common Questions</h3>
      <h4 className="py-4 text-2xl font-title">Everything You Need To Know</h4>
      {faqContent.map((q) => {
        return (
          <h4 key={++count}>
            <span className="font-bold">{q.question}</span>
            <span className="relative"> - {q.answer}</span>
          </h4>
        );
      })}
    </div>
  );
}
