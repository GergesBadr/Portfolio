import { Helmet } from "react-helmet-async";
import AboutMe from "../components/about/AboutMe";
import FeaturesList from "../components/about/FeaturesList";
import SkillsList from "../components/about/SkillsList";
import AnimatedPage from "./AnimatedPage";
import FunFactsList from "../components/about/FunFactsList";

function About() {
  return (
    <>
      <Helmet>
        <title>Gerges Badr | About</title>
        <meta property="og:title" content="Gerges Badr | About" />
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
        <AboutMe />
        <FunFactsList />
        <FeaturesList />
        <SkillsList />
      </AnimatedPage>
    </>
  );
}

export default About;
