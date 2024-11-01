import { StaticImageData } from "next/image";
import andyPic from "../../../public/team/andy.webp";
import carlyPic from "../../../public/team/carly.webp";
import gillianPic from "../../../public/team/gillian.webp";

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
    likes: "",
    dislikes: "",
  },
  {
    name: "Gillian Bemont",
    title: "Owner, Second Shooter, Editor",
    email: "gillianbemont@gmail.com",
    phone: "315-871-9503",
    photo: gillianPic,
    likes: "",
    dislikes: "",
  },
];

export default TeamMembers;
