// Social icons
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

// Facts icons
import { HiOutlineBookOpen } from "react-icons/hi2";
import { TbPlaneDeparture } from "react-icons/tb";
import { IoFootballOutline } from "react-icons/io5";
import { PiFilmSlate } from "react-icons/pi";

// Features images
import curious from "../assets/features/Curious.svg";
import responsive from "../assets/features/Responsive.svg";
import accessibilityStandars from "../assets/features/Accessibility.svg";
import goal from "../assets/features/Goal.svg";
import development from "../assets/features/Development.svg";

// Skills images
import html from "../assets/skills/html.webp";
import css from "../assets/skills/css.webp";
import javascript from "../assets/skills/javascript.webp";
import react from "../assets/skills/react.webp";
import tailwind from "../assets/skills/tailwind.webp";
import accessibility from "../assets/skills/accessibility.webp";
import git from "../assets/skills/git.webp";
import framer from "../assets/skills/framer.webp";
import supabase from "../assets/skills/supabase.svg";
import reduxToolkit from "../assets/skills/redux.svg";
import reactQuery from "../assets/skills/react-query.svg";
import typeScript from "../assets/skills/typescript.webp";

// Constants
export const links = [
  { name: "Home", to: "/home" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Blog", to: "/blog" },
  { name: "Contact", to: "/contact" },
];

export const social = [
  {
    id: 1,
    name: "Github",
    href: "https://github.com/GergesBadr",
    icon: <FaGithub className="size-6" />,
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gerges-badr-9a6224245/",
    icon: <FaLinkedinIn className="size-6" />,
  },
  {
    id: 3,
    name: "Whatsapp",
    href: "https://wa.me/201156728649",
    icon: <FaWhatsapp className="size-6" />,
  },
  {
    id: 4,
    name: "Frontend mentor",
    href: "https://www.frontendmentor.io/profile/GergesBadr",
  },
];

export const facts = [
  {
    id: 1,
    icon: <HiOutlineBookOpen className="size-10 " />,
    title: "Reading",
    desc: (
      <>
        The best thing I am doing in my free time ever! You can follow me on{" "}
        <a
          target="_blank"
          href="https://www.goodreads.com/user/show/129380427-gerges-badr"
        >
          GoodReads
        </a>{" "}
        to find out what I&apos;m reading.
      </>
    ),
  },

  {
    id: 2,
    icon: <TbPlaneDeparture className="size-10 " />,
    title: "Travelling",
    desc: (
      <>
        I did not travel a lot before, yet, discovering new cultures, places,
        and talk to new people still a big dream that will come true, one day!
      </>
    ),
  },

  {
    id: 3,
    icon: <IoFootballOutline className="size-10 " />,
    title: "Football",
    desc: (
      <>
        It&apos;s a big passion of mine. Whether I&apos;m playing a game with
        friends or cheering for my favorite teams, which are the{" "}
        <a target="_blank" href="https://www.mancity.com/">
          Citizens
        </a>{" "}
        and{" "}
        <a target="_blank" href="https://en.wikipedia.org/wiki/Zamalek_SC">
          Zamalek SC
        </a>
      </>
    ),
  },

  {
    id: 4,
    icon: <PiFilmSlate className="size-10 " />,
    title: "Movies & Shows",
    desc: (
      <>
        One of the perfect ways to relax and get entertained after a long day.{" "}
        <a href="https://www.imdb.com/title/tt4574334/">Stranger Things</a> and{" "}
        <a href="https://www.imdb.com/title/tt0455275/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_prison">
          Prison Break
        </a>{" "}
        are my favorite shows, what about you?
      </>
    ),
  },
];

export const features = [
  {
    id: 1,
    title: "Attention to detail",
    desc: "Delivering a pixel-perfect websites is crucial part in frontend development.",
    icon: curious,
    iconAlt: "Attention to detail, illustration.",
  },
  {
    id: 2,
    title: "Responsive design",
    desc: "Creating websites that adapt effectively with various screen sizes and devices.",
    icon: responsive,
    iconAlt: "Responsive design, illustration.",
  },
  {
    id: 3,
    title: "Accessibility",
    desc: "Everyone should be able to easily understand what you want to show them, under any circumstances.",
    icon: accessibilityStandars,
    iconAlt: "Accessibility, illustration",
  },
  {
    id: 4,
    title: "Continuous learning",
    desc: "As hard as I can, I'm trying to stay up-to-date with latest trends, technologies, and best practices in frontend development.",
    icon: goal,
    iconAlt: "Continuous learning, illustration.",
  },
  {
    id: 5,
    title: "Web development",
    desc: "I also have a basic knowledge in UI/UX design and backend development.",
    icon: development,
    iconAlt: "Web development, illustration.",
  },
];

export const skills = [
  { id: 1, name: "Html", icon: html },
  { id: 2, name: "Css", icon: css },
  { id: 3, name: "Javascript", icon: javascript },
  { id: 4, name: "React", icon: react },
  { id: 5, name: "TailwindCss", icon: tailwind },
  { id: 6, name: "Accessibility", icon: accessibility },
  { id: 7, name: "Git & GitHub", icon: git },
  { id: 8, name: "Framer motion", icon: framer },
  { id: 9, name: "Supabase", icon: supabase },
  { id: 10, name: "Redux Toolkit", icon: reduxToolkit },
  { id: 11, name: "React Query", icon: reactQuery },
  { id: 12, name: "TypeScript", icon: typeScript },
];
