import LandingSection from "../components/home/LandingSection";
import AnimatedPage from "./AnimatedPage";
import FeaturedProjects from "../components/home/FeaturedProjects";
import RecentPosts from "../components/home/RecentPosts";
import useUpdateSeo from "../hooks/useUpdateSeo";

function Home() {
  useUpdateSeo("Gerges Badr | Home");

  return (
    <AnimatedPage>
      <LandingSection />
      <FeaturedProjects />
      <RecentPosts />
    </AnimatedPage>
  );
}

export default Home;
