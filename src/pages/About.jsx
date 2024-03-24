import { useEffect } from "react";
import AboutMe from "../components/about/AboutMe";
import FeaturesList from "../components/about/FeaturesList";
import SkillsList from "../components/about/SkillsList";
import AnimatedPage from "./AnimatedPage";

function About() {
  useEffect(() => {
    document.title = "Gerges Badr | About";
  }, []);

  return (
    <AnimatedPage>
      <AboutMe />
      <FeaturesList />
      <SkillsList />
    </AnimatedPage>
  );
}

export default About;
