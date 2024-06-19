import { Helmet } from "react-helmet-async";
import ProjectsList from "../components/projects/ProjectsList";
import AnimatedPage from "./AnimatedPage";

function Projects() {
  return (
    <>
      <Helmet>
        <title>Gerges Badr | Projects</title>
        <meta property="og:title" content="Gerges Badr | Projects" />
        <meta
          name="description"
          content="Welcome to my portfolio, where you can find everything you need to know about me, who am I, what can I offer you, what projects I have done and how to contact me."
        />
        <meta
          property="og:description"
          content="Welcome to my portfolio, where you can find everything you need to know about me, who am I, what can I offer you, what projects I have done and how to contact me."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/dt1NJGW/portfolio-thumbnail.png"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <AnimatedPage>
        <ProjectsList />
      </AnimatedPage>
    </>
  );
}

export default Projects;
