import { ReactElement } from "react";
import Link from "next/link";
import { headerLinks } from "../header/header-content";

export type FaqDef = {
  question: ReactElement;
  answer: ReactElement;
};

const faqContent: FaqDef[] = [
  {
    question: <span>How far do you travel?</span>,
    answer: (
      <span>
        We're based in Rochester, NY and regularly travel to Buffalo, Syracuse,
        Chautauqua, Batavia, Geneseo, and throughout the Finger Lakes Region
        including Canandaigua, Geneva, Skaneateles, and Ithaca. We charge a{" "}
        <Link href={headerLinks.pricing.url} className="underline">
          moderate travel fee
        </Link>{" "}
        when going more than 45 minutes from home base.
      </span>
    ),
  },
  {
    question: <span>Should we do an engagement session?</span>,
    answer: (
      <span>
        We don't require an engagement session, but we recommend it because we
        get a chance to meet and work together before your wedding, and you'll
        get some practice posing! But we'll still cut the price if you don't
        need it.
      </span>
    ),
  },
  {
    question: <span>Do I need two photographers?</span>,
    answer: (
      <span>
        We do just fine with one photographer and it{" "}
        <Link href={headerLinks.pricing.url} className="underline">
          saves you money
        </Link>
        , but a second photographer gives you more angles and more chances to
        catch candid moments. So you'll get more pictures and variety with two;
        and three is even better!
      </span>
    ),
  },
  {
    question: (
      <span>
        <Link href={headerLinks.gallery.url} className="underline">
          What's your style?
        </Link>
      </span>
    ),
    answer: (
      <span>
        Photo-y! We just get pictures of everything, capturing tons of candid
        moments without neglecting the posed photos (your mom wants them even if
        you don't). We edit in a clean, natural style because tastes change and
        highly edited photos just dated in a few years.
      </span>
    ),
  },
  {
    question: (
      <span>
        What happens if you get sick/die or your kids have an emergency?
      </span>
    ),
    answer: (
      <span>
        We have{" "}
        <Link href={headerLinks.meetTheTeam.url} className="underline">
          three wedding photographers
        </Link>{" "}
        and you're probably hiring one or two. So we can handle unexpected
        illness or injury. And if our kids are sick, we have an awesome and
        extensive and local family who watches our kids while we work, and we
        trust them with any emergency.
      </span>
    ),
  },
  {
    question: <span>How do we book you?</span>,
    answer: (
      <span>
        Start with the{" "}
        <Link href={headerLinks.contact.url} className="underline">
          contact form
        </Link>{" "}
        below! Then we can do a Zoom call or stick to email. To book us,
        complete an online contract and deposit, and you're official! Then you
        can book your engagement session any time before the wedding. We'll get
        in touch about a month before the wedding to get all the good details
        about your itinerary.
      </span>
    ),
  },
  {
    question: <span>What do you charge?</span>,
    answer: (
      <span>
        Use the{" "}
        <Link href={headerLinks.pricing.url} className="underline">
          price calculator
        </Link>{" "}
        !
      </span>
    ),
  },
  {
    question: <span>How do we pay you?</span>,
    answer: (
      <span>
        At Bemont Photo, we always go the extra mile to get your money. So pay
        us however you like! We prefer Venmo, but cash,{" "}
        <Link
          href={headerLinks.makeAPayment.url}
          target="_blank"
          className="underline"
        >
          credit
        </Link>{" "}
        , and checks are fine.
      </span>
    ),
  },
  {
    question: (
      <span>My venue is asking about insurance for my vendors... ?</span>
    ),
    answer: (
      <span>
        No problem! We have liability insurance and will be happy to send your
        venue a certificate.
      </span>
    ),
  },
  {
    question: <span>Don't you just LOVE sparkler exits?</span>,
    answer: <span>No.</span>,
  },
  {
    question: <span>The garter toss is cool, though, right?</span>,
    answer: <span>Yuck.</span>,
  },
];

export { faqContent };
