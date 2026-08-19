import Link from "next/link";
import CheckAvailabilityCta from "../shared/check-availability-cta";

const teamMembers = [
  {
    name: "Carly Straight",
    likes: "cats, scary movies, every food, when the sky is pretty, bedtime",
    dislikes:
      "loud noises, losing sunglasses, slow walkers, the sound of chewing",
  },
  {
    name: "Andy Bemont",
    likes:
      "Mario Kart, Pink Floyd, cheeseburgers, cats, mulch, sci-fi, naps, crossbreezes, cars",
    dislikes: "centipedes, wasps, scorpions, maggots, botflies, eggplant",
  },
  {
    name: "Gillian Bemont",
    likes:
      "birds, flowers, just resting her eyes for a bit, bread, a lake, singing, kids, every dog, true crime, dry erase markers",
    dislikes: "olives, touching flour, cockroaches, chores, surprises",
  },
];

export default function TeamContent() {
  return (
    <section className="text-primary-900">
      <div className="grid gap-12 border-t border-primary-300/60 py-16 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
        <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
          Here’s the story:
        </h2>
        <div className="space-y-6 text-base leading-7 text-primary-700 sm:text-lg sm:leading-8">
          <p>
            Andy is married to Gillian. Andy learned photography to take
            pictures of their kid…but then of course he wanted all the fancy
            photography gear. Gillian encouraged him to start a business, and
            Bemont Photo launched in 2017! But you need two photographers for
            most weddings, so he taught Gillian. Then there was another kid,
            and Gillian couldn’t go to so many weddings—so her sister Carly
            swept in to save the day, and today shoots most weddings with Andy.
            In 2026, Carly became co-owner and Executive Grand Overseer.
          </p>
          <p>
            Since then, we’ve taken more than half a million pictures at more
            than 200 weddings across Western New York, and only pissed off one
            client (we’ll tell you all about it if you want).
          </p>
        </div>
      </div>

      <ul className="grid border-y border-primary-300/60 sm:grid-cols-3">
        {teamMembers.map((person, index) => (
          <li key={person.name} className={`py-10 sm:px-7 sm:py-12 ${index ? "border-t sm:border-l sm:border-t-0" : ""} border-primary-300/50`}>
            <p className="mb-8 text-xs font-medium tracking-[0.16em] text-[#66858a]">0{index + 1}</p>
            <h2 className="font-display text-3xl font-medium">{person.name}</h2>
            <div className="mt-8 space-y-3 border-t border-primary-300/50 pt-6 text-sm leading-6 text-primary-700">
              <p><span className="font-medium text-primary-900">Likes:</span> {person.likes}.</p>
              <p><span className="font-medium text-primary-900">Dislikes:</span> {person.dislikes}.</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mx-auto max-w-4xl py-20 text-center sm:py-28">
        <p className="mb-8 font-display text-[clamp(2.4rem,5vw,5rem)] font-medium leading-[1.03] tracking-[-0.04em] text-balance">
          Check out our pictures and get in touch if you like what you see!
        </p>
        <CheckAvailabilityCta fullWidthOnMobile />
        <Link
          href="/gallery"
          className="editorial-link mt-5 inline-block text-sm font-medium"
        >
          Explore the galleries
        </Link>
      </div>
    </section>
  );
}

export function TeamHero() {
  return (
    <header>
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#a85235]">
        The team
      </p>
      <h1 className="font-display text-[clamp(3.2rem,5vw,5.8rem)] font-medium leading-[0.94] tracking-[-0.05em] text-balance">
        Your wedding photo dream team.
      </h1>
      <p className="mt-7 max-w-lg text-base leading-7 text-primary-700 sm:text-lg sm:leading-8">
        We love working together, and we’d love to bring our little team to your
        wedding!
      </p>
    </header>
  );
}
