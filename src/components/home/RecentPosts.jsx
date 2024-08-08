import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { compareAsc } from "date-fns";
import postsData from "../../data/postsData";
import PostItemThumbnail from "../blog/PostItemThumbnail";
import PrimaryButton from "../../components/common/PrimaryButton";

function RecentPosts() {
  const navigate = useNavigate();

  const recent = postsData.sort((a, b) => compareAsc(b.date, a.date));
  const lastFourPosts = recent.length > 4 ? recent.slice(0, 4) : recent;

  return (
    <section className="responsive-container space-y-12">
      <h2 className="heading-2 px-6 text-center">Recent posts</h2>

      <ul className="grid gap-8 sm:grid-cols-[repeat(auto-fill,minmax(500px,1fr))]">
        {lastFourPosts.map((post, index) => {
          return <PostItemThumbnail key={post.id} post={post} index={index} />;
        })}
      </ul>

      <PrimaryButton
        onClick={() => navigate("/blog")}
        moreStyles="flex items-center gap-1"
      >
        All posts <HiArrowRight className="size-5" />
      </PrimaryButton>
    </section>
  );
}

export default RecentPosts;
