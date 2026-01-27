import Link from "next/link";
import CheckAvailabilityCta from "../shared/check-availability-cta";

type TeamMember = {
  name: string;
  likes: string;
  dislikes: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Carly Straight",
    likes: "scary movies, every food, and bedtime",
    dislikes: "slow walkers and chewing sounds",
  },
  {
    name: "Andy Bemont",
    likes: "Pink Floyd, spreadsheets, and crossbreezes",
    dislikes: "fast bugs and eggplant",
  },
  {
    name: "Gillian Bemont",
    likes: "kids, true crime, and just resting her eyes for a bit",
    dislikes: "cockroaches and chores",
  },
];

export default function TeamContent() {
  let count = 0;
  return (
    <section className="space-y-6 text-primary-900">
      <div className="space-y-3 text-base leading-relaxed">
        <div className="space-y-2">
          <h1 className="text-sm font-medium text-primary-700">The Team</h1>
          <p className="text-2xl sm:text-3xl font-semibold text-pretty">
            Your wedding photo dream team
          </p>
        </div>
        <div className="space-y-3 border-y border-primary-200/70 py-3">
          <p>
            Here’s the story: Andy is married to Gillian (on the right). Andy
            learned photography to take pictures of their kid… but he’s a
            big-time nerd and immediately “needed” all the best photo gear.
            Gillian encouraged him to start a business, and Bemont Photo
            launched in 2017. You need two photographers for most weddings, so
            Gillian learned and joined in. Then there was another kid, and she
            couldn’t make it to every wedding.
          </p>
          <p>
            Gillian's sister Carly swept in to save the day, quickly became
            phenomenal, and has been shooting weddings with Andy ever since. And
            to kick off 2026, Carly became Executive Grand Overseer and co-owner
            of Bemont Photo! This was a deserved promotion after nearly a decade
            as "the other one."
          </p>
          <p>
            Gillian is still very much part of the team, stepping in for
            weddings when needed. But her crucial talent is artistic taste -
            she's the one that keeps everything consistent and timeless with her
            sharp eye for detail and her ability to differentiate "cool" from
            "good". This website has photos taken by all three of us, and it has
            photos all the way back to our first weddings. You can't guess the
            photographer or the year, because Gillian reviews every single one -
            they will all be by Bemont Photo in a year you'll never forget.
          </p>
          <p>
            So it's not a photographer with a 2nd shooter. We are family and
            best friends, and wedding days are better for it. Andy has so many
            extremely great things to say, Carly is not impressed, and we're all
            going to have a great time working together.
          </p>
        </div>
      </div>
      <ul className="text-pretty flex flex-col leading-snug divide-y divide-primary-200">
        {teamMembers.map((person) => {
          return (
            <li key={++count} className="py-4">
              <p>
                <span className="text-xl font-semibold pr-1">
                  {person.name}
                </span>
              </p>
              <ul className="mt-2 space-y-1 text-base text-primary-800 list-disc pl-5">
                <li>Likes {person.likes}</li>
                <li>Dislikes {person.dislikes}</li>
              </ul>
            </li>
          );
        })}
      </ul>
      <CheckAvailabilityCta className="pt-2" />
    </section>
  );
}
