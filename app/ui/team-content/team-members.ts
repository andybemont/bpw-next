import { StaticImageData } from "next/image";
import andyPic from "../../../public/team/andy.jpg";
import carlyPic from "../../../public/team/carly.jpg";
import gillianPic from "../../../public/team/gillian.jpg";

export type TeamMember = {
  name: string;
  title: string;
  email: string;
  phone: string;
  photo: StaticImageData;
  likes: string;
  dislikes: string;
};

const TeamMembers: TeamMember[] = [
  {
    name: "Carly Straight",
    title:
      "Wedding Photographer, Principal Photographer for family, engagement, and senior portrait sessions",
    email: "carly@bemontphoto.com",
    phone: "585-755-7665",
    photo: carlyPic,
    likes: "",
    dislikes: "",
  },
  {
    name: "Andy Bemont",
    title: "Owner, Principal Wedding Photographer",
    email: "andy@bemontphoto.com",
    phone: "585-590-0570",
    photo: andyPic,
    likes:
      "Mario Kart, Pink Floyd, cheeseburgers, cats, mulch, sci-fi, naps, crossbreezes, cars",
    dislikes: "Centipedes, wasps, scorpions, maggots, botflies, eggplant",
  },
  {
    name: "Gillian Bemont",
    title: "Owner, Second Shooter, Editor",
    email: "gillianbemont@gmail.com",
    phone: "315-871-9503",
    photo: gillianPic,
    likes:
      "Birds, a lake, flowers, just resting her eyes for a bit, bread, singing, kids, every dog, true crime, dry erase markers",
    dislikes:
      "Olives, touching flour, cockroaches, chores, surprises, when people are wearing shorts when it’s way too cold for that",
  },
];

export default TeamMembers;
