import { Helmet } from "react-helmet-async";
import AnimatedPage from "./AnimatedPage";
import Banner from "../components/blog/Banner";
import FilterPosts from "../components/blog/FilterPosts";
import PostsList from "../components/blog/PostsList";

function Blog() {
  return (
    <AnimatedPage>
      <Helmet>
        <title>Gerges Badr | Blog</title>
      </Helmet>

      <Banner />
      <FilterPosts />
      <PostsList />
    </AnimatedPage>
  );
}

export default Blog;
