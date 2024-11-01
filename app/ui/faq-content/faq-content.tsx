import { faqContent } from "./faqs";

export default function FaqContent() {
  let count = 0;

  return (
    <div className="text-blue-950 p-2 tracking-wide max-h-full text-lg">
      <div className="grow">
        <h3 className="font-title text-4xl font-bold">Common Questions</h3>
      </div>
      <div className="grow py-4">
        <p className="font-title">
          We get the same questions all the time, so this might save you some
          wondering!
        </p>
      </div>
      <div className="grow">
        {faqContent.map((q) => {
          return (
            <span key={++count}>
              <h4>
                <span>⭐️</span>
                <span className="font-bold">{q.question}</span>
                <span className="relative"> - {q.answer}</span>
              </h4>
            </span>
          );
        })}
      </div>
    </div>
  );
}
