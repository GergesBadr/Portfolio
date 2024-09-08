import { facts } from "../../data/constants";
import FunFactsItem from "./FunFactsItem";

function FunFactsList() {
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
