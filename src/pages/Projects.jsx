import { useEffect } from "react";
import ProjectsList from "../components/projects/ProjectsList";
import AnimatedPage from "./AnimatedPage";

function Projects() {
  useEffect(() => {
    document.title = "Gerges Badr | Projects";
  }, []);

  return (
    <AnimatedPage>
      <ProjectsList />
    </AnimatedPage>
  );
}

export default Projects;
