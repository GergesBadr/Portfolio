import { useNavigate, useParams } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import { format } from "date-fns";
import { Helmet } from "react-helmet-async";
import postsData from "../data/postsData";
import AnimatedPage from "./AnimatedPage";
import useCalcReadingTime from "../hooks/useCalcReadingTime";

function Post() {
  const navigate = useNavigate();
  const { urlTitle } = useParams();
  const currentPost = postsData.find((post) => post.urlTitle === urlTitle);
  const readingTime = useCalcReadingTime(".post-content");

  return (
    <>
      {/* Seo optimization */}
      <Helmet>
        <title> {currentPost.title} </title>
        <meta property="og:title" content={currentPost.title} />
        <meta name="description" content={currentPost.introduction} />
        <meta property="og:description" content={currentPost.introduction} />
        <meta property="og:image" content={currentPost.ogImage} />
        <meta property="og:type" content="article" />
      </Helmet>

      <AnimatedPage>
        <article className="mx-auto mt-32 max-w-[725px] px-4 pb-20 sm:mt-48">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 font-medium duration-300 hover:text-indigo-600 dark:hover:text-indigo-500"
          >
            <HiArrowLeft className="size-5 group-hover:-translate-x-1" />
            <span>Back</span>
          </button>
          <h1 className="heading-1 mt-6"> {currentPost.title} </h1>
          <p className="text-lg opacity-85">
            <span> {format(currentPost.date, "MMM, dd, yyyy")} </span>
            <span> &mdash; {readingTime} min read </span>
          </p>

          {/* Post content */}
          <div className="post-content mt-10 text-lg">
            {currentPost.content}
          </div>
        </article>
      </AnimatedPage>
    </>
  );
}

export default Post;
