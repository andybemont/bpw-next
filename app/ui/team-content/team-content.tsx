import TeamMembers from "./team-members";
import Image from "next/image";

export default function TeamContent() {
  let count = 0;
  return TeamMembers.map((person) => {
    return (
      <>
        <div className={`grow ${count === 0 ? "hidden" : "block"}`} />
        <div key={++count} className="sm:w-1/4 bg-blue-950/70 text-white my-4">
          <h4 className="text-center text-3xl">{person.name}</h4>
          <p className="text-center text-xl">{person.email}</p>
          <Image
            src={person.photo}
            alt={person.name}
            className="h-48 w-48 rounded-full mx-auto"
          />
          <p className="px-4">
            <span className="text-xl">Likes: </span>
            <span className="text-sm">{person.likes}</span>
          </p>
          <p className="px-4 text-sm">
            <span className="text-xl">Dislikes: </span>
            <span className="text-sm">{person.dislikes}</span>
          </p>
        </div>
      </>
    );
  });
}
