import projectsData from "../../data/projectsData";
import ProjectItem from "./ProjectItem";

function ProjectsList() {
  const orderedProjects = projectsData
    .slice()
    .sort((a, b) => a.priority - b.priority);

  return (
    <section className="responsive-container space-y-10 pt-10">
      <div className="px-6 text-center">
        <h1 className="heading-1">My projects</h1>
        <p className="text-xl opacity-75">What I have done before?</p>
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
