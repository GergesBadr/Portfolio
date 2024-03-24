import { useEffect } from "react";
import LandingSection from "../components/home/LandingSection";
import AnimatedPage from "./AnimatedPage";
import FeaturedProjects from "../components/home/FeaturedProjects";
import RecentPosts from "../components/home/RecentPosts";

function Home() {
  useEffect(() => {
    document.title = "Gerges Badr | Home";
  }, []);

  return (
    <AnimatedPage>
      <LandingSection />
      <FeaturedProjects />
      <RecentPosts />
    </AnimatedPage>
  );
}

export default Home;
