/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import { FaGithub } from "react-icons/fa6";
import { HiLink, HiArrowRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import AnimatedPage from "./AnimatedPage";
import Invitation from "../components/common/Invitation";
import PrimaryButton from "../components/common/PrimaryButton";
import home from "../assets/projects/latest/home.webp";
import time from "../assets/projects/latest/time.webp";
import resources from "../assets/projects/latest/resources.webp";

function LatestProject() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Gerges Badr | Un-social media</title>
        <meta property="og:title" content="Gerges Badr | Un-social media" />
        <meta name="description" content="" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
      </Helmet>

      <AnimatedPage>
        <section className="responsive-container [&_p]:sec-text space-y-16 [&_h2]:mb-8 [&_p]:max-w-3xl [&_p]:text-lg [&_p]:leading-relaxed">
          <Introduction />

          <img
            src={home}
            alt="Screenshot of Un-social media website homepage"
            className="mx-auto w-full rounded-3xl shadow-2xl duration-700 hover:scale-95 dark:shadow-primary-shadow-dark xl:w-[75%]"
          />

          <div className="grid gap-16 lg:grid-cols-2">
            <Goal />
            <Problems />
          </div>

          <img
            src={time}
            alt="Screenshot of the time spend on social media section from the website"
            className="mx-auto w-full rounded-3xl shadow-2xl duration-700 hover:scale-95 dark:shadow-primary-shadow-dark xl:w-[75%]"
          />

          <Implementation />

          <img
            src={resources}
            alt="Screenshot of the resources section from the website"
            className="mx-auto w-full rounded-3xl shadow-2xl duration-700 hover:scale-95 dark:shadow-primary-shadow-dark xl:w-[75%]"
          />

          <Invitation isCentered={true} />

          <PrimaryButton
            onClick={() => navigate("/projects")}
            moreStyles="flex items-center gap-1 mx-auto"
          >
            All projects <HiArrowRight className="size-5" />
          </PrimaryButton>
        </section>
      </AnimatedPage>
    </>
  );
}

function Introduction() {
  const stack = ["React", "TailwindCSS", "Framer motion", "Netlify"];

  return (
    <div>
      <h1 className="heading-1 mb-8 text-center">Un-social media</h1>

      <p className="mx-auto text-center">
        <strong className="block">
          “There are a million ways to deal with an idea, my way is to
          <span className="unique-text"> CODE</span> it.”
        </strong>
        It's been a while since I quit social media, I felt like I needed to
        tell everyone what I know and what I have experienced, that's how this
        project comes alive.
      </p>

      <div className="mt-8 flex items-center justify-center">
        <div className="flex flex-wrap items-center gap-6 border-r-2 border-r-gray-300 py-3 pr-4 dark:border-r-gray-600">
          <a
            href="https://github.com/GergesBadr/un-social-media"
            target="_blank"
            className="hover:unique-text flex items-center gap-2 font-medium duration-200"
          >
            <FaGithub className="size-6 shrink-0" />
            GitHub
          </a>
          <a
            href="https://unsocial-media.netlify.app/"
            target="_blank"
            className="hover:unique-text flex items-center gap-2 font-medium duration-200"
          >
            <HiLink className="size-6 shrink-0" />
            Live Site
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-2 pl-4">
          {stack.map((item, idx) => {
            return (
              <span
                key={idx}
                className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium tracking-wide dark:bg-gray-800"
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Goal() {
  return (
    <div>
      <h2 className="heading-2 text-center md:text-left">
        Project purpose and goal
      </h2>

      <p>
        Nowadays, social media has become a fundamental part of our lives, so,
        it's important to use it wisely, this project intended to help:
      </p>

      <ul className="sec-text my-4 list-inside list-disc space-y-2 text-lg">
        <li>Rising awareness about something that we are using daily.</li>
        <li>
          Understanding how social media works, why it can be addictive, and
          what happens behind the scenes.
        </li>
        <li>
          Explaining social media problems while leaving resources to refer to
          for more information and deep dive.
        </li>
        <li>Adding solutions to use social media healthily.</li>
      </ul>

      <p>
        The website is for anyone who cares about social media by any means,
        whether they want to take action about it, or just want to know what's
        going on under the hood.
      </p>
    </div>
  );
}

function Problems() {
  return (
    <div className=" [&_p]:mb-4">
      <h2 className="heading-2 text-center md:text-left">Problems faced</h2>

      <p>
        Like most projects, I ran into some problems along the way, particularly
        with the animations and engagement.
      </p>

      <p>
        I realized how it was important to make the website as “fun” as
        possible, most of the visitors are people who are mostly addicted to
        social media or overuse it, so, they are always exposed to interesting
        things in social media and get bored quickly…
      </p>

      <p>
        So, I worked hard (with the help of Framer Motion library) to display
        all this overwhelming text in a way that is not boring such as a long
        article or a research.
      </p>
    </div>
  );
}

function Implementation() {
  return (
    <div className="mx-auto xl:w-[75%]">
      <h2 className="heading-2 text-center md:text-left">
        Implementation & Inspiration
      </h2>
      <ul className="sec-text list-inside list-decimal space-y-2 text-lg">
        <li>
          Assets collection and optimization for performance and accessibility.
        </li>
        <li>
          I chose the fonts from Google Fonts, Poppins Font as the default font,
          and Merienda for headings.
        </li>
        <li>
          I wrote all the content, based on my experience, the books I have
          read, the movies and YouTube videos I have watched, the articles I
          have read, and more…
        </li>
        <li>
          Most of the animations are inspired (If not by me) by those two sites
          mainly:{" "}
          <a
            href="https://www.hover.dev/components/"
            target="_blank"
            className="unique-text underline hover:no-underline"
          >
            hover.dev
          </a>{" "}
          and{" "}
          <a
            href="https://framermotionexamples.com/examples"
            target="_blank"
            className="unique-text underline hover:no-underline"
          >
            framer motion examples
          </a>
        </li>
        <li>
          I got most of the statistics resources from{" "}
          <a
            href="https://www.statista.com/"
            target="_blank"
            className="unique-text underline hover:no-underline"
          >
            statista.com
          </a>{" "}
        </li>
        <li>
          As hard as I could, I followed Accessibility and Performance best
          practices for better user experience.
        </li>
      </ul>
    </div>
  );
}

export default LatestProject;
