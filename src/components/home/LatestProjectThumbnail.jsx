import { HiChevronRight, HiArrowRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../common/PrimaryButton";
import unSocialMediaTh from "../../assets/projects/latest/thumbnail.webp";

function LatestProjectThumbnail() {
  const navigate = useNavigate();

  return (
    <section className="responsive-container space-y-12">
      <h2 className="heading-2 px-6 text-center">Latest project</h2>

      <div className="overflow-hidden rounded-3xl bg-indigo-100 shadow-primary-shadow-light dark:bg-secondary-dark dark:shadow-primary-shadow-dark">
        <img
          src={unSocialMediaTh}
          alt="Un-social media project mockup"
          className="h-full w-full scale-150 object-cover object-center duration-700 hover:scale-110 sm:scale-100"
        />
      </div>

      <div className="max-w-2xl space-y-3">
        <h3 className="heading-3">Un-social media</h3>
        <p className="sec-text text-lg leading-relaxed">
          We all use social media every day, but, have you ever wondered how is
          social media affecting us? Unsocial-media is a website to discuss the
          problems of social media, how it works behind the scenes, how each
          platform is unique, what should we do to protect ourselves from its
          dark side, And more…
        </p>
        <button
          onClick={() => navigate("/projects/latest")}
          className="group flex items-center gap-1 font-semibold"
        >
          View project{" "}
          <HiChevronRight className="size-5 duration-200 group-hover:translate-x-1.5" />{" "}
        </button>
      </div>

      <PrimaryButton
        onClick={() => navigate("/projects")}
        moreStyles="flex items-center gap-1"
      >
        All projects <HiArrowRight className="size-5" />
      </PrimaryButton>
    </section>
  );
}

export default LatestProjectThumbnail;
