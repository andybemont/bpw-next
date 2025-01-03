import { ReactElement } from "react";
import Link from "next/link";

export type Reason = {
  title: ReactElement;
  blurb: ReactElement;
};

const reasons: Reason[] = [
  {
    title: (
      <span>
        <Link href="./gallery" className="underline">
          Timeless Pictures
        </Link>
      </span>
    ),
    blurb: (
      <span>
        Every picture you receive will be carefully edited, but we're not
        over-processing them with trendy filters - we aim for a bright,
        colorful, and neutral style that will still look good after tastes have
        changed
      </span>
    ),
  },
  {
    title: <span>Amazing Turnaround Time</span>,
    blurb: (
      <span>
        You'll have your pictures within a month, guaranteed, and most couples
        get their photos sooner. Splurge for Priority Editing to get them in a
        week!
      </span>
    ),
  },
  {
    title: <span>Clear Pricing</span>,
    blurb: (
      <span>
        If you're sick of vendor websites hiding their{" "}
        <Link href="./pricing" className="underline">
          pricing, packages, and availability,
        </Link>{" "}
        you'll love our{" "}
        <Link href="./pricing" className="underline">
          interactive price calculator
        </Link>
        !
      </span>
    ),
  },
  {
    title: <span>Efficient Wedding Days</span>,
    blurb: (
      <span>
        We won't keep you out doing photos for two hours - we hated it on our
        wedding day, and we prioritize getting you back to the party
      </span>
    ),
  },
  {
    title: <span>Calm and Flexible</span>,
    blurb: (
      <span>
        Your wedding day could get crazy, but we'll be your rock! We practically
        invented "going with the flow". We will help you stick to your timeline,
        but sometimes the timeline just fails and we will make it work!
      </span>
    ),
  },
  {
    title: <span>Unobtrusive</span>,
    blurb: (
      <span>
        You'll forget we're there for much of the day (apart from our great
        jokes). We generally use longer-range lenses and stay out of your
        business. You won't see us sprinting around in a tizzy.
      </span>
    ),
  },
  {
    title: <span>Download Rights</span>,
    blurb: (
      <span>
        Use your pictures however you like! Your gallery will let you download
        all your pictures in high resolution - order your own albums and prints,
        and share on social media to your heart's content!
      </span>
    ),
  },
  {
    title: <span>Simple Booking</span>,
    blurb: (
      <span>
        No printing, scanning, or mailing - all your interactions with us can be
        done virtually (apart from the photography). You can e-sign your
        contract and pay via Venmo or credit card
      </span>
    ),
  },
  {
    title: <span>Reliable</span>,
    blurb: (
      <span>
        We're punctual, organized, and insured. We have plenty of backup gear,
        and all your photos get backed up to multiple locations.
      </span>
    ),
  },
];

export default reasons;
