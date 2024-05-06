import { Helmet } from "react-helmet-async";
import ProjectsList from "../components/projects/ProjectsList";
import AnimatedPage from "./AnimatedPage";

function Projects() {
  return (
    <AnimatedPage>
      <Helmet>
        <title>Gerges Badr | Projects</title>
      </Helmet>

      <ProjectsList />
    </AnimatedPage>
  );
}

export default Projects;
