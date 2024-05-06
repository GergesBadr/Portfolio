import LandingSection from "../components/home/LandingSection";
import AnimatedPage from "./AnimatedPage";
import FeaturedProjects from "../components/home/FeaturedProjects";
import RecentPosts from "../components/home/RecentPosts";
import Seo from "../components/common/Seo";

function Home() {
  return (
    <AnimatedPage>
      <Seo
        title="Gerges Badr | Home"
        desc="Welcome to my portfolio, where you can find everything you need to know about me, who am I, what can I offer you, what projects I have done and how to contact me."
        image="https://i.ibb.co/dt1NJGW/portfolio-thumbnail.png"
      />

      <LandingSection />
      <FeaturedProjects />
      <RecentPosts />
    </AnimatedPage>
  );
}

export default Home;
