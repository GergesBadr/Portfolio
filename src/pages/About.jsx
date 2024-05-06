import AboutMe from "../components/about/AboutMe";
import FeaturesList from "../components/about/FeaturesList";
import SkillsList from "../components/about/SkillsList";
import AnimatedPage from "./AnimatedPage";
import Seo from "../components/common/Seo";

function About() {
  return (
    <AnimatedPage>
      <Seo
        title="Gerges Badr | About"
        desc="Welcome to my portfolio, where you can find everything you need to know about me, who am I, what can I offer you, what projects I have done and how to contact me."
        image="https://i.ibb.co/dt1NJGW/portfolio-thumbnail.png"
      />

      <AboutMe />
      <FeaturesList />
      <SkillsList />
    </AnimatedPage>
  );
}

export default About;
