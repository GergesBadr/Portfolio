import { HiOutlineBookOpen } from "react-icons/hi2";
import { TbPlaneDeparture } from "react-icons/tb";
import { IoFootballOutline } from "react-icons/io5";
import { PiFilmSlate } from "react-icons/pi";

import FunFactsItem from "./FunFactsItem";

function FunFactsList() {
  const facts = [
    {
      id: 1,
      icon: <HiOutlineBookOpen className="size-10 " />,
      title: "Reading",
      desc: (
        <>
          The best thing I am doing in my free time ever! You can follow me on{" "}
          <a
            target="_blank"
            href="https://www.goodreads.com/user/show/129380427-gerges-badr"
          >
            GoodReads
          </a>{" "}
          to find out what I&apos;m reading.
        </>
      ),
    },

    {
      id: 2,
      icon: <TbPlaneDeparture className="size-10 " />,
      title: "Travelling",
      desc: (
        <>
          I did not travel a lot before, yet, discovering new cultures, places,
          and talk to new people still a big dream that will come true, one day!
        </>
      ),
    },

    {
      id: 3,
      icon: <IoFootballOutline className="size-10 " />,
      title: "Football",
      desc: (
        <>
          It&apos;s a big passion of mine. Whether I&apos;m playing a game with
          friends or cheering for my favorite teams, which are the{" "}
          <a target="_blank" href="https://www.mancity.com/">
            Citizens
          </a>{" "}
          and{" "}
          <a target="_blank" href="https://en.wikipedia.org/wiki/Zamalek_SC">
            Zamalek SC
          </a>
        </>
      ),
    },

    {
      id: 4,
      icon: <PiFilmSlate className="size-10 " />,
      title: "Movies & Shows",
      desc: (
        <>
          One of the perfect ways to relax and get entertained after a long day.{" "}
          <a href="https://www.imdb.com/title/tt4574334/">Stranger Things</a>{" "}
          and{" "}
          <a href="https://www.imdb.com/title/tt0455275/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_prison">
            Prison Break
          </a>{" "}
          are my favorite shows, what about you?
        </>
      ),
    },
  ];

  return (
    <section className="responsive-container space-y-10 rounded-xl bg-indigo-100 p-10 dark:bg-secondary-dark">
      <div className="text-center">
        <h2 className="heading-2">| Fun facts about me | </h2>
        <p className="text-lg opacity-75">
          Professionalism is not everything, <br /> here are personal stuff
          about me to share with you!
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:grid-cols-3 2xl:grid-cols-4">
        {facts.map((fact) => {
          return <FunFactsItem key={fact.id} fact={fact} />;
        })}
      </ul>
    </section>
  );
}

export default FunFactsList;
