import { Helmet } from "react-helmet-async";
import LandingSection from "../components/home/LandingSection";
import AnimatedPage from "./AnimatedPage";
import FeaturedProjects from "../components/home/FeaturedProjects";
import RecentPosts from "../components/home/RecentPosts";

function Home() {
  return (
    <AnimatedPage>
      <Helmet>
        <title>Gerges Badr | Home</title>
      </Helmet>

      <LandingSection />
      <FeaturedProjects />
      <RecentPosts />
    </AnimatedPage>
  );
}

export default Home;
