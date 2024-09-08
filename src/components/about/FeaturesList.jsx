import { features } from "../../data/constants";
import FeaturesItem from "./FeaturesItem";

function FeaturesList() {
  return (
    <section className="space-y-14">
      <div className="px-6 text-center">
        <h2 className="heading-2">Why me?</h2>
        <p className="text-xl opacity-75">What can I offer for you?</p>
      </div>

      <div className="responsive-container grid grid-cols-[repeat(auto-fill,minmax(285px,1fr))] gap-6">
        {features.map((feature) => {
          return <FeaturesItem key={feature.id} feature={feature} />;
        })}
      </div>
    </section>
  );
}

export default FeaturesList;
