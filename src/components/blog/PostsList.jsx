import { useSearchParams } from "react-router-dom";
import { compareAsc } from "date-fns";
import { AnimatePresence } from "framer-motion";
import postsData from "../../data/postsData";
import PostItemThumbnail from "./PostItemThumbnail";

function PostsList() {
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get("category");

  const filteredPosts = postsData.filter(
    (post) => post.category.toLowerCase() === currentCategory,
  );

  const displayedPosts = filteredPosts.length > 0 ? filteredPosts : postsData;
  displayedPosts.sort((a, b) => compareAsc(a.date, b.date));

  return (
    <section>
      <ul className="responsive-container grid gap-8 sm:grid-cols-[repeat(auto-fill,minmax(500px,1fr))]">
        <AnimatePresence mode="wait">
          {displayedPosts.map((post, index) => {
            return (
              <PostItemThumbnail key={post.id} post={post} index={index} />
            );
          })}
        </AnimatePresence>
      </ul>
    </section>
  );
}

export default PostsList;
