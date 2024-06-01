import AboutMe from "../components/about/AboutMe";
import FeaturesList from "../components/about/FeaturesList";
import SkillsList from "../components/about/SkillsList";
import AnimatedPage from "./AnimatedPage";
import useUpdateSeo from "../hooks/useUpdateSeo";
import FunFactsList from "../components/about/FunFactsList";

function About() {
  useUpdateSeo("Gerges Badr | About");

  return (
    <AnimatedPage>
      <AboutMe />
      <FunFactsList />
      <FeaturesList />
      <SkillsList />
    </AnimatedPage>
  );
}

export default About;
