import TeamMembers from "../../lib/team-members";
import Link from "next/link";
import PartialPanel from "../shared/partialPanel";

export default function TeamContent() {
  let count = 0;
  return (
    <PartialPanel>
      <section>
        <div className="text-primary-900 h-full overflow-y-auto rounded-lg p-2">
          <h1 className="text-2xl font-bold text-red-800 text-pretty my-2">
            Your wedding photo dream team
          </h1>
          <span className="text-sm text-justify py-1 border-y-2 border-y-primary-900">
            <p>
              Here's the story: Andy is married to Gillian (right). Andy learned
              photography to take pictures of their kid... but then of course he
              wanted all the fancy photography gear. Gillian encouraged him to
              start a business, and Bemont Photo launched in 2017! But you need
              two photographers for most weddings, so he taught Gillian. But
              then there was another kid, and Gillian couldn't go to so many
              weddings - so her sister Carly swept in to save the day, and today
              shoots most of the weddings with Andy.
            </p>
            <p className="mt-2">
              Since then, we've taken half a million pictures of 150+ weddings
              at venues across Western New York, and only pissed off one client
              (we'll tell you all about it if you want). We love working
              together, and we'd love to bring our little team to your wedding!
              So check out{" "}
              <Link href="../gallery" className="underline">
                our pictures
              </Link>{" "}
              and{" "}
              <Link href="../contact" className="underline">
                {" "}
                get in touch
              </Link>{" "}
              if you like what you see!
            </p>
          </span>
          <ul className="my-auto text-pretty flex flex-col leading-snug divide-y divide-red-900">
            {TeamMembers.map((person) => {
              return (
                <li key={++count} className="py-1">
                  <p>
                    <span className="text-xl font-bold pr-1">
                      {person.name}
                    </span>
                    <span className="text-sm lg:text-base">{person.email}</span>
                  </p>
                  <p>
                    <span className="text-lg font-bold text-red-900">
                      Likes{" "}
                    </span>
                    <span className="text-sm lg:text-base">{person.likes}</span>
                  </p>
                  <p>
                    <span className="text-lg font-bold text-red-900">
                      Dislikes{" "}
                    </span>
                    <span className="text-sm lg:text-base">
                      {person.dislikes}
                    </span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </PartialPanel>
  );
}
