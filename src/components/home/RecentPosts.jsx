import { compareAsc } from "date-fns";
import postsData from "../../data/postsData";
import PostItemThumbnail from "../blog/PostItemThumbnail";

function RecentPosts() {
  const recent = postsData.sort((a, b) => compareAsc(a.date, b.date));
  const lastThreePosts = recent.length > 3 ? recent.slice(0, 3) : recent;

  return (
    <section className="responsive-container space-y-12">
      <h2 className="heading-2 px-6 text-center">Recent posts</h2>

      <ul className="grid gap-8 sm:grid-cols-[repeat(auto-fill,minmax(500px,1fr))]">
        {lastThreePosts.map((post, index) => {
          return <PostItemThumbnail key={post.id} post={post} index={index} />;
        })}
      </ul>
    </section>
  );
}

export default RecentPosts;
