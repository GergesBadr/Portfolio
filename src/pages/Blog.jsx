import { useEffect } from "react";
import AnimatedPage from "./AnimatedPage";
import Banner from "../components/blog/Banner";
import FilterPosts from "../components/blog/FilterPosts";
import PostsList from "../components/blog/PostsList";

function Blog() {
  useEffect(() => {
    document.title = "Gerges Badr | Blog";
  }, []);

  return (
    <AnimatedPage>
      <Banner />
      <FilterPosts />
      <PostsList />
    </AnimatedPage>
  );
}

export default Blog;
