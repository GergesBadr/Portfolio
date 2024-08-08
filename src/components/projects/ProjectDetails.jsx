import { FaGithub } from "react-icons/fa6";
import { HiLink } from "react-icons/hi2";

function ProjectDetails({ project }) {
  const { title, tags, details, gitHub, demo } = project;

  return (
    <div>
      <h1 className="heading-1 mb-4">{title}</h1>

      <div className="mb-8 flex flex-wrap items-center gap-2">
        {tags?.map((tag) => {
          return (
            <span
              key={tag}
              className="block rounded-full bg-gray-200 px-4 py-2 text-sm font-medium tracking-wide dark:bg-gray-800"
            >
              {tag}
            </span>
          );
        })}
      </div>

      {details}

      {gitHub && demo ? (
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a
            href={gitHub}
            target="_blank"
            className="hover:unique-text flex items-center gap-2 font-medium duration-300"
          >
            <FaGithub className="size-5" />
            <span>GitHub</span>
          </a>
          <a
            href={demo}
            target="_blank"
            className="hover:unique-text flex items-center gap-2 font-medium duration-300"
          >
            <HiLink className="size-5" />
            <span>Demo</span>
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default ProjectDetails;
