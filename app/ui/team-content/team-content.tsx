import TeamMembers from "./team-members";
import Image from "next/image";

export default function TeamContent() {
  let count = 0;
  return (
    <>
      <div className="text-white p-2 tracking-wide max-h-full text-right">
        <div className="grow m-0 p-0">
          <h3 className="font-title text-4xl font-bold">Meet the Team</h3>
        </div>
        <div className="grow">
          {TeamMembers.map((person) => {
            return (
              <div key={++count} className="flex flex-row">
                <div className="grow">
                  <h4 className="font-bold">{person.name}</h4>
                  <p className="personDetail">{person.email}</p>
                  <p className="personDetail">{person.phone}</p>
                </div>
                <div className="h-48 w-48">
                  <Image src={person.photo} alt={person.name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
