import { Helmet } from "react-helmet-async";
import AnimatedPage from "./AnimatedPage";
import Banner from "../components/blog/Banner";
import FilterPosts from "../components/blog/FilterPosts";
import PostsList from "../components/blog/PostsList";

function Blog() {
  return (
    <>
      <Helmet>
        <title>Gerges Badr | Blog</title>
        <meta property="og:title" content="Gerges Badr | Blog" />
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
        <Banner />
        <FilterPosts />
        <PostsList />
      </AnimatedPage>
    </>
  );
}

export default Blog;
