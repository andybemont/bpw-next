import TeamMembers from "./team-members";
import Image from "next/image";

export default function TeamContent() {
  let count = 0;
  return (
    <>
      <div className="text-white tracking-wider text-right">
        <div className="m-0 p-2">
          <h3 className="font-title text-5xl">Meet the Team</h3>
        </div>
        <div className="text-left p-2">
          {TeamMembers.map((person) => {
            return (
              <div key={++count} className="flex flex-row pb-4">
                <div className="w-80 pr-4">
                  <h4 className="text-3xl">{person.name}</h4>
                  <p className="text-xl text-blue-950">{person.email}</p>
                  <p>
                    <span className="text-xl">Likes: </span>
                    <span className="text-sm text-blue-950">
                      {person.likes}
                    </span>
                  </p>
                  <p className="text-sm">
                    <span className="text-xl">Dislikes: </span>
                    <span className="text-sm text-blue-950">
                      {person.dislikes}
                    </span>
                  </p>
                </div>
                <div className="h-48 w-48">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    className="h-48 w-48 rounded-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
