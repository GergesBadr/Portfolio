import AnimatedPage from "./AnimatedPage";
import Banner from "../components/blog/Banner";
import FilterPosts from "../components/blog/FilterPosts";
import PostsList from "../components/blog/PostsList";
import Seo from "../components/common/Seo";

function Blog() {
  return (
    <AnimatedPage>
      <Seo
        title="Gerges Badr | Blog"
        desc="Welcome to my portfolio, where you can find everything you need to know about me, who am I, what can I offer you, what projects I have done and how to contact me."
        image="https://i.ibb.co/dt1NJGW/portfolio-thumbnail.png"
      />

      <Banner />
      <FilterPosts />
      <PostsList />
    </AnimatedPage>
  );
}

export default Blog;
