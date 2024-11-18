import TeamMembers from "./team-members";
import Image from "next/image";

export default function TeamContent() {
  let count = 0;
  return TeamMembers.map((person) => {
    return (
      <>
        <div
          key={++count}
          className="w-full sm:w-1/4 bg-primary-900 sm:bg-primary-900/70 text-primary-50 my-4 transition-all hover:bg-primary-900 rounded-lg"
        >
          <h3 className="text-center text-3xl m-0 p-0">{person.name}</h3>
          <p className="text-center">{person.email}</p>
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
