import projectsData from "../../data/projectsData";
import ProjectItem from "./ProjectItem";

function ProjectsList() {
  const orderedProjects = projectsData
    .slice()
    .sort((a, b) => a.priority - b.priority);

  return (
    <section className="responsive-container space-y-10 pt-10">
      <div className="px-6 text-center">
        <h1 className="heading-1 relative mx-auto mb-4 w-fit duration-200 before:absolute before:bottom-0 before:left-1/2 before:-z-[1] before:h-[15%] before:w-[120%] before:-translate-x-1/2 before:rounded-lg before:bg-indigo-600 before:duration-200 hover:text-white hover:before:h-full">
          Projects
        </h1>
        <p className="text-xl opacity-75">
          💼 A collection of my favorite work 💼{" "}
        </p>
      </div>

      <ul className="grid gap-12 sm:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
        {orderedProjects.map((project, index) => {
          return (
            <ProjectItem key={project.id} project={project} index={index} />
          );
        })}
      </ul>
    </section>
  );
}

export default ProjectsList;
