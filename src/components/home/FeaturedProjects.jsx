import projectsData from "../../data/projectsData";
import ProjectItem from "../projects/ProjectItem";

function FeaturedProjects() {
  const featured = projectsData.filter((project) => project.featured === true);

  return (
    <section className="responsive-container space-y-12">
      <h2 className="heading-2 px-6 text-center">Featured projects</h2>

      <ul className="grid gap-12 sm:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
        {featured.map((project, index) => {
          return (
            <ProjectItem key={project.id} project={project} index={index} />
          );
        })}
      </ul>
    </section>
  );
}

export default FeaturedProjects;
