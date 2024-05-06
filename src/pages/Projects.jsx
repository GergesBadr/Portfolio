import ProjectsList from "../components/projects/ProjectsList";
import useUpdateSeo from "../hooks/useUpdateSeo";
import AnimatedPage from "./AnimatedPage";

function Projects() {
  useUpdateSeo("Gerges Badr | Projects");

  return (
    <AnimatedPage>
      <ProjectsList />
    </AnimatedPage>
  );
}

export default Projects;
