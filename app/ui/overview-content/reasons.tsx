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
        <Link href="./pricing" className="underline">
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
        get their photos within 2-3 weeks.
      </span>
    ),
  },
  {
    title: <span>Transparent Pricing</span>,
    blurb: (
      <span>
        If you're sick of vendor websites omitting this main piece of
        information, you'll love our{" "}
        <Link href="./pricing" className="underline">
          interactive price calculator
        </Link>
        !
      </span>
    ),
  },
  {
    title: <span>Efficient Wedding Day</span>,
    blurb: (
      <span>
        We will not keep you out doing photos for two hours! We hated it on our
        wedding day, and we prioritize getting you to your party
      </span>
    ),
  },
  {
    title: <span>Calm and Flexible</span>,
    blurb: (
      <span>
        Your wedding day can be crazy, but we promise we'll be your rock! Even
        when the timeline is falling apart, we'll stay calm and adjust as we go.
        We'll help stay on track, but will go with the flow as the day evolves
      </span>
    ),
  },
  {
    title: <span>Unobtrusive</span>,
    blurb: (
      <span>
        You'll forget we're there for much of the day. We generally use
        longer-range lenses and stay out of your business. You won't see us
        sprinting around in a tizzy.
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
    title: <span>Easy Paperwork</span>,
    blurb: (
      <span>
        Nobody likes printing, scanning, or mailing - all your interactions with
        us can be done virtually (apart from the photography). You can e-sign
        your contract and payment can be done via Venmo or credit card
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
