import Link from "next/link";
import CheckAvailabilityCta from "../shared/check-availability-cta";

type FaqItem = {
  question: string;
  answer: string[];
};

export const faqItems: FaqItem[] = [
  {
    question: "Who are you, and who will be photographing our wedding?",
    answer: [
      "We’re a three-person team: Andy and Gillian Bemont, and Carly Straight. You can read more about us and how we work together on our Team page.",
    ],
  },
  {
    question: "How does pricing, booking, and payment work?",
    answer: [
      "We keep things simple. We offer one primary wedding photography package, book with an online contract and deposit, and handle payments electronically.",
      "For all the details, see our Pricing page.",
    ],
  },
  {
    question: "How would you describe your photography style?",
    answer: [
      "We aim for the most beautiful possible representation of reality.",
      "We don’t want people to look at your photos and think “what a great photographer.” We want them to think “what a beautiful couple” or “what a great moment.” Our focus is on honest moments, natural expressions, and images that feel like your day actually felt.",
    ],
  },
  {
    question: "How many hours of coverage do we need?",
    answer: [
      "We always provide at least 8 hours of coverage, which is plenty for most weddings.",
      "If you think you might need more than 8 hours, we can always add time. That said, longer days are often unnecessary. You don’t need hours of getting-ready photos, and late-night dancing photos eventually start to look the same no matter how fun the party is.",
    ],
  },
  {
    question: "Do you help with timeline planning?",
    answer: [
      "Absolutely. Whether you want help building a timeline from scratch or just want a final sanity check, we’re happy to help. Even if it takes a ton of back-and-forth, it’s worth it to have a day that actually works and feels relaxed.",
    ],
  },
  {
    question: "What happens if the day runs late?",
    answer: [
      "Then it runs late. And that is fine!",
      "Time management is one of our strengths, and the first thing you should not worry about is photography. We can adjust quickly and still get great images in a condensed timeframe.",
      "If you want to avoid stress altogether, the best solution is generous padding in the schedule. A little breathing room makes the whole day feel easier.",
    ],
  },
  {
    question: "How many photos will we receive?",
    answer: [
      "Around 600 images is very typical, but it varies. The biggest factors are how long we’re there, how activity-heavy the day is, and how lively the dance floor gets. Last year our galleries ranged roughly from 450 to 950 images, with most landing in the low 600s.",
    ],
  },
  {
    question: "How long does it take to get our photos?",
    answer: [
      "We guarantee delivery within 30 days and usually deliver sooner, often within 2–3 weeks. We don’t like work piling up, and you don’t like waiting.",
    ],
  },
  {
    question: "Will we receive high-resolution images and printing rights?",
    answer: [
      "Yes. You’ll receive high-resolution files and full personal printing rights. You’re free to print, share, and enjoy your photos however you like. You can also order high-quality prints directly from your gallery.",
    ],
  },
  {
    question: "Do you bring backup equipment?",
    answer: [
      "Yes. Each of us brings enough equipment to fully photograph a wedding even if something fails. We also bring an embarrassing number of batteries.",
    ],
  },
  {
    question: "Are you insured?",
    answer: [
      "Yes. We carry liability insurance and can provide a certificate to your venue if required.",
    ],
  },
  {
    question: "What happens if you’re sick or there’s an emergency?",
    answer: [
      "There are three of us, and you get two photographers. So we won’t call in some random person to shoot your wedding—you’ll always get the people you expect.",
    ],
  },
  {
    question: "What’s a “first look” and should we do it?",
    answer: [
      "A first look is when you see each other for the first time before the ceremony. It’s a nice moment, and for many people it’s a relief to have that moment without everyone watching. It also means you can be together while you wait for the ceremony.",
      "But the real benefit is logistical—you can do it an hour or two before the ceremony and then get all your pictures done. This is the best way to avoid missing cocktail hour because of pictures.",
      "We love the tradition of seeing each other for the first time at the ceremony, but a first look makes for a relaxing day and maximizes your time at the party.",
    ],
  },
  {
    question: "How should we plan for family and group photos?",
    answer: [
      "Family photos go best with a little planning.",
      "We strongly recommend making a list of groups ahead of time and letting the people involved know to expect it. When people wander off and need to be tracked down, things slow down quickly.",
      "We’re happy to photograph as many groupings as you want, but fewer groups means more time for everything else. If you want every possible combination, that’s fine too, just know it will take time.",
    ],
  },
  {
    question: "What happens if the weather is bad?",
    answer: [
      "We’re comfortable working in drizzle, cold, and generally unpleasant conditions.",
      "If the weather is uncomfortable for you, we’ll prioritize indoor photos. If indoor options are limited, we’ll do what we can inside and keep an eye out for weather breaks later in the day to grab additional portraits.",
    ],
  },
  {
    question: "What do you need from us on the wedding day?",
    answer: [
      "At a minimum, just when and where to start.",
      "That said, we strongly prefer having a complete timeline. It helps us strategize, identify potential time crunches, and make sure everything runs smoothly.",
    ],
  },
  {
    question:
      "Do you give direction, or is everything candid? Will you make us do awkward photos? What if we’re bad at being in pictures?",
    answer: [
      "It’s our job to make your pictures good. And while we’re hands-off most of the day, we’ll take charge during portraits and family photos. If you have your own ideas or are just total naturals, that’s great—but most people want clear direction.",
      "Lots of our couples say they’re “terrible at pictures” and their pictures look good. Yours will too! We break the stress with comedy and lighthearted heckling, we tell you where to put your hands, and we’re not afraid to abandon a pose that isn’t working for you.",
      "We work well with reluctant grooms who wish there were no posed pictures at all. We are efficient and we are not sappy, so photo-haters won’t feel like they’re being dragged around on an endless activity they hate. They’ll feel like they’re knocking out a task that is easier than expected.",
      "We’re generally not into really cheesy shots. But if we do get in a cheesy mood, we’ll always give you an opportunity to veto.",
    ],
  },
  {
    question: "Do you actually enjoy weddings?",
    answer: [
      "Yes, genuinely.",
      "There are parts of every wedding day that could use a fast-forward button, but overall the weddings we photograph are an uplifting break in a world that can feel short on joy.",
      "We love seeing dads cry, old people showing up an hour early because this is the most exciting day of their year, manly groomsmen fussing over each others’ ties, that one mousy bridesmaid who turns out to be absolutely unhinged on the dancefloor.",
      "And we love our role. It’s not why you hire us, but we are your wedding day buddies. We love keeping you relaxed and laughing, and we love saying goodbye knowing we did our part to make your big day a success.",
    ],
  },
];

export const infrequentlyAskedItems: FaqItem[] = [
  {
    question: "Are people still doing garter tosses?",
    answer: ["Very rarely. And that’s probably for the best."],
  },
  {
    question: "Don’t you just love sparkler exits?",
    answer: ["You mean walking backwards between drunk people waving fire?"],
  },
  {
    question: "Fine. Well we want something fun… what’s better?",
    answer: [
      "Bubbles during the recessional. Every time.",
      "If you go this route, use a small bubble machine in addition to individual bubble wands. Grandma is wonderful, but bubble output is not her strong suit.",
    ],
  },
  {
    question:
      "We want photos with everyone, even the non-party people. What’s the best way?",
    answer: [
      "The old tradition was for couples to visit each table, talk to the guests, and then pose for a picture. That worked, but it was very, very slow and became unpopular.",
      "A recent trend is the “table dash,” which your DJ can coordinate. You zip around and try to get a picture with each table before a song ends. It sounds silly and we’re usually skeptical of wedding fads, but this is a winner. You’ll have a picture with everybody in three minutes, and it’s truly fun.",
    ],
  },
  {
    question: "Our venue lets us select the weather—what do you recommend?",
    answer: [
      "Clouds.",
      "Specify no rain, obviously, but overcast skies give soft light and fewer squinty faces. Be cautious with the “dramatic wind” option. It sounds great on paper, but wind tends to cause more problems than it solves.",
      "If you insist on full sun and high winds, we’ll still get you great photos. We’re professionals, not weather divas.",
    ],
  },
  {
    question: "Should we have an “unplugged” ceremony?",
    answer: [
      "This means telling guests not to have their phones out during the ceremony. We love the sentiment, but in our experience it doesn’t do anything. Phone addicts will have their phones out regardless, and the rest of your guests didn’t need to be told.",
    ],
  },
  {
    question: "Are you going to be up in our business all day?",
    answer: [
      "No, we tend to use longer lenses and keep a polite distance. Wide-angle shots have their place, but we’re generally not going to be right next to you.",
      "This is a stylistic choice. Standing back with a longer lens is more beautiful, and that’s our passion. We mix it up a bit, especially on the dance floor, but we’ll usually be at least ten feet from you.",
    ],
  },
];

function FaqSection({ heading, items }: { heading: string; items: FaqItem[] }) {
  const renderParagraph = (paragraph: string) => {
    if (
      paragraph ===
      "We’re a three-person team: Andy and Gillian Bemont, and Carly Straight. You can read more about us and how we work together on our Team page."
    ) {
      return (
        <>
          We’re a three-person team: Andy and Gillian Bemont, and Carly
          Straight. You can read more about us and how we work together on our{" "}
          <Link
            href="/team"
            className="underline decoration-primary-300/80 underline-offset-4"
          >
            Team
          </Link>{" "}
          page.
        </>
      );
    }

    if (paragraph === "For all the details, see our Pricing page.") {
      return (
        <>
          For all the details, see our{" "}
          <Link
            href="/pricing"
            className="underline decoration-primary-300/80 underline-offset-4"
          >
            Pricing
          </Link>{" "}
          page.
        </>
      );
    }

    if (
      paragraph ===
      "We love the tradition of seeing each other for the first time at the ceremony, but a first look makes for a relaxing day and maximizes your time at the party."
    ) {
      return (
        <>
          We love the tradition of seeing each other for the first time at the
          ceremony, but a{" "}
          <Link
            href="/galleries/first-look-photos"
            className="underline decoration-primary-300/80 underline-offset-4"
          >
            first look
          </Link>{" "}
          makes for a relaxing day and maximizes your time at the party.
        </>
      );
    }

    return paragraph;
  };

  return (
    <section className="space-y-4">
      <h2 className="text-2xl sm:text-3xl font-semibold border-b border-primary-300/70 pb-2">
        {heading}
      </h2>
      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.question} className="space-y-1">
            <h3 className="text-base font-semibold">{item.question}</h3>
            <div className="space-y-1.5 text-base leading-relaxed text-primary-800">
              {item.answer.map((paragraph) => (
                <p key={paragraph}>{renderParagraph(paragraph)}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function FaqContent() {
  return (
    <section className="space-y-6 text-primary-900">
      <div className="space-y-3">
        <h1 className="text-sm font-medium text-primary-700">
          Wedding Photography FAQ
        </h1>
        <p className="text-2xl sm:text-3xl font-semibold text-pretty">
          Everything you might be wondering
        </p>
      </div>
      <FaqSection
        heading="Common questions"
        items={faqItems}
      />
      <FaqSection
        heading="Infrequently Asked Questions"
        items={infrequentlyAskedItems}
      />
      <CheckAvailabilityCta className="pt-2" />
    </section>
  );
}
