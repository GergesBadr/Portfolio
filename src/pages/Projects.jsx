import Seo from "../components/common/Seo";
import ProjectsList from "../components/projects/ProjectsList";
import AnimatedPage from "./AnimatedPage";

function Projects() {
  return (
    <AnimatedPage>
      <Seo
        title="Gerges Badr | Projects"
        desc="Welcome to my portfolio, where you can find everything you need to know about me, who am I, what can I offer you, what projects I have done and how to contact me."
        image="https://i.ibb.co/dt1NJGW/portfolio-thumbnail.png"
      />

      <ProjectsList />
    </AnimatedPage>
  );
}

export default Projects;
