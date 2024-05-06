import AnimatedPage from "./AnimatedPage";
import Banner from "../components/blog/Banner";
import FilterPosts from "../components/blog/FilterPosts";
import PostsList from "../components/blog/PostsList";
import useUpdateSeo from "../hooks/useUpdateSeo";

function Blog() {
  useUpdateSeo("Gerges Badr | Blog");

  return (
    <AnimatedPage>
      <Banner />
      <FilterPosts />
      <PostsList />
    </AnimatedPage>
  );
}

export default Blog;
