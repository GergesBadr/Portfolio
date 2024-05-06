import { Helmet } from "react-helmet-async";
import AboutMe from "../components/about/AboutMe";
import FeaturesList from "../components/about/FeaturesList";
import SkillsList from "../components/about/SkillsList";
import AnimatedPage from "./AnimatedPage";

function About() {
  return (
    <AnimatedPage>
      <Helmet>
        <title>Gerges Badr | About</title>
      </Helmet>

      <AboutMe />
      <FeaturesList />
      <SkillsList />
    </AnimatedPage>
  );
}

export default About;
