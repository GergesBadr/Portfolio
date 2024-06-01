import { useRef } from "react";
import SkillsItem from "./SkillsItem";

import html from "../../assets/skills/html.webp";
import css from "../../assets/skills/css.webp";
import javascript from "../../assets/skills/javascript.webp";
import react from "../../assets/skills/react.webp";
import tailwind from "../../assets/skills/tailwind.webp";
import accessibility from "../../assets/skills/accessibility.webp";
import git from "../../assets/skills/git.webp";
import framer from "../../assets/skills/framer.webp";
import supabase from "../../assets/skills/supabase.svg";
import reduxToolkit from "../../assets/skills/redux.svg";
import reactQuery from "../../assets/skills/react-query.svg";

function SkillsList() {
  const skillsListRef = useRef(null);

  const skills = [
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
  ];

  return (
    <section className="space-y-14">
      <div className="px-6 text-center">
        <h2 className="heading-2">My skills</h2>
        <p className="text-lg opacity-75">
          Programming languages, tools, and libraries I can work with
        </p>
      </div>

      <div
        ref={skillsListRef}
        className="responsive-container relative border-b-2 border-b-gray-300 pb-80 dark:border-b-gray-700"
      >
        {skills.map((skill) => {
          return (
            <SkillsItem
              key={skill.id}
              skill={skill}
              parentRef={skillsListRef}
            />
          );
        })}
      </div>
    </section>
  );
}

export default SkillsList;
