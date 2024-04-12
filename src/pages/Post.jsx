import { useNavigate, useParams } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import { format } from "date-fns";
import { useEffect } from "react";
import postsData from "../data/postsData";
import AnimatedPage from "./AnimatedPage";
import useCalcReadingTime from "../hooks/useCalcReadingTime";

function Post() {
  const navigate = useNavigate();
  const { urlTitle } = useParams();
  const currentPost = postsData.find((post) => post.urlTitle === urlTitle);
  const readingTime = useCalcReadingTime(".post-content");

  // Update meta data for each post page
  useEffect(() => {
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", currentPost.introduction);
    document
      .querySelector("meta[property='og:image']")
      .setAttribute("content", currentPost.ogImage);
    document
      .querySelector("meta[property='og:type']")
      .setAttribute("content", "article");

    // Cleanup to default
    return () => {
      document
        .querySelector("meta[name='description']")
        .setAttribute(
          "content",
          "Welcome to my portfolio, here you will find everything you need/want to know about me, who am I, what I do, what can I offer for you, what projects I have done, what are my thoughts about frontend development, and how to contact me.",
        );
      document
        .querySelector("meta[property='og:image']")
        .setAttribute(
          "content",
          "https://media.licdn.com/dms/image/D4E16AQEmVSTYlCjtPA/profile-displaybackgroundimage-shrink_350_1400/0/1712592186545?e=1718236800&v=beta&t=d3E_iMvCwbOfjVeMbnD1vEYqzIPo7uxBQiL8bA7pG1E",
        );
      document
        .querySelector("meta[property='og:type']")
        .setAttribute("content", "website");
    };
  }, [currentPost.introduction, currentPost.ogImage]);

  return (
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
        <div className="[&_a]:unique-text post-content mt-6 text-lg">
          {currentPost.content}
        </div>
      </article>
    </AnimatedPage>
  );
}

export default Post;
