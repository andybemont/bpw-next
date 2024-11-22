import { StaticImageData } from "next/image";
import andyPic from "../../public/team/andy.jpg";
import carlyPic from "../../public/team/carly.jpg";
import gillianPic from "../../public/team/gillian.jpg";

export type TeamMember = {
  name: string;
  email: string;
  likes: string;
  dislikes: string;
};

const TeamMembers: TeamMember[] = [
  {
    name: "Carly Straight",
    email: "carly@bemontphoto.com",
    likes: "Cats, Scary Movies, Every Food, When the Sky is Pretty, Bedtime",
    dislikes:
      "Loud Noises, Losing Sunglasses, Slow Walkers, the Sound of Chewing",
  },
  {
    name: "Andy Bemont",
    email: "andy@bemontphoto.com",
    likes:
      "Mario Kart, Pink Floyd, cheeseburgers, cats, mulch, sci-fi, naps, crossbreezes, cars",
    dislikes: "Centipedes, wasps, scorpions, maggots, botflies, eggplant",
  },
  {
    name: "Gillian Bemont",
    email: "gillianbemont@gmail.com",
    likes:
      "Birds, flowers, just resting her eyes for a bit, bread, a lake, singing, kids, every dog, true crime, dry erase markers",
    dislikes: "Olives, touching flour, cockroaches, chores, surprises",
  },
];

export default TeamMembers;
