import CheckAvailabilityCta from "../shared/check-availability-cta";

const teamMembers = [
  { name: "Andy Bemont", role: "Photographer · founder · spreadsheet enthusiast", likes: "Pink Floyd, crossbreezes, and making a system for absolutely everything", dislikes: "fast bugs and eggplant" },
  { name: "Carly Straight", role: "Photographer · co-owner · executive grand overseer", likes: "scary movies, every food, and bedtime", dislikes: "slow walkers and chewing sounds" },
  { name: "Gillian Bemont", role: "Photographer · aesthetic high court", likes: "kids, true crime, and just resting her eyes for a bit", dislikes: "cockroaches and chores" },
];

export default function TeamContent() {
  return (
    <section className="text-primary-900">
      <div className="grid gap-12 border-t border-primary-300/60 py-16 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
        <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">The relatively short version of a long-running group chat.</h2>
        <div className="space-y-6 text-base leading-7 text-primary-700 sm:text-lg sm:leading-8">
          <p>Andy learned photography to take pictures of his and Gillian’s kid, then immediately behaved like a giant nerd who “needed” all the best equipment. Gillian encouraged him to turn the obsession into a business, and Bemont Photo began in 2017.</p>
          <p>Gillian learned the craft and joined him because weddings are better covered by two photographers. When another kid made every Saturday less practical, her sister Carly swept in, became phenomenal, and stayed. In 2026 Carly became co-owner and Executive Grand Overseer—a deserved promotion after nearly a decade as “the other one.”</p>
          <p>Gillian still photographs weddings when needed and reviews the work with the mercilessly useful ability to distinguish “cool” from “good.” This site includes photographs by all three of us, going back to our earliest seasons. The voice stays consistent because the people and standards do.</p>
        </div>
      </div>

      <ul className="grid border-y border-primary-300/60 sm:grid-cols-3">
        {teamMembers.map((person, index) => (
          <li key={person.name} className={`py-10 sm:px-7 sm:py-12 ${index ? "border-t sm:border-l sm:border-t-0" : ""} border-primary-300/50`}>
            <p className="mb-8 text-xs font-medium tracking-[0.16em] text-[#66858a]">0{index + 1}</p>
            <h2 className="font-display text-3xl font-medium">{person.name}</h2>
            <p className="mt-2 min-h-12 text-sm leading-6 text-primary-600">{person.role}</p>
            <div className="mt-8 space-y-3 border-t border-primary-300/50 pt-6 text-sm leading-6 text-primary-700">
              <p><span className="font-medium text-primary-900">Likes:</span> {person.likes}.</p>
              <p><span className="font-medium text-primary-900">Objects to:</span> {person.dislikes}.</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mx-auto max-w-4xl py-20 text-center sm:py-28">
        <p className="mb-8 font-display text-[clamp(2.4rem,5vw,5rem)] font-medium leading-[1.03] tracking-[-0.04em] text-balance">You spend a lot of your wedding with your photographers. Liking them is not a frivolous requirement.</p>
        <CheckAvailabilityCta fullWidthOnMobile />
      </div>
    </section>
  );
}

export function TeamHero() {
  return <header><p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#a85235]">The people in your peripheral vision all day</p><h1 className="font-display text-[clamp(3.2rem,5vw,5.8rem)] font-medium leading-[0.94] tracking-[-0.05em] text-balance">Family. Best friends. Very good at weddings.</h1><p className="mt-7 max-w-lg text-base leading-7 text-primary-700 sm:text-lg sm:leading-8">Bemont Photo isn’t one photographer plus whoever was free that Saturday. We are a small, permanent team who know one another’s timing, taste, jokes, and emergency snack requirements.</p></header>;
}
