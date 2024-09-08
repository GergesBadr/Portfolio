import { skills } from "../../data/constants";

function SkillsModal() {
  return (
    <div className="[&_p]:sec-text space-y-4 [&_p]:text-lg [&_p]:leading-relaxed">
      <h1 className="heading-1">Skills list</h1>

      <p>
        Can&apos;t recognize the skills from its logos? Never mind, here is a
        text list of them:
      </p>

      <ul className="flex flex-wrap items-center justify-center gap-8 border-y-2 py-4 text-lg dark:border-y-gray-700">
        {skills.map((skill) => {
          return <li key={skill.id}>{skill.name}</li>;
        })}
      </ul>

      <p>
        Be sure that I am always open to learning new skills, technologies,
        tools, or concepts as the job requires. As I believe that continues
        learning is a must in terms of software development!
      </p>
    </div>
  );
}

export default SkillsModal;
