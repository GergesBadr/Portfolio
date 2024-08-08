import { Helmet } from "react-helmet-async";
import LandingSection from "../components/home/LandingSection";
import AnimatedPage from "./AnimatedPage";
import RecentPosts from "../components/home/RecentPosts";
import LatestProjectThumbnail from "../components/home/LatestProjectThumbnail";
import Invitation from "../components/common/Invitation";

function Home() {
  return (
    <>
      <Helmet>
        <title>Gerges Badr | Home</title>
        <meta property="og:title" content="Gerges Badr | Home" />
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
        <LandingSection />
        <LatestProjectThumbnail />
        <RecentPosts />
        <Invitation isCentered={true} />
      </AnimatedPage>
    </>
  );
}

export default Home;
