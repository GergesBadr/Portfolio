import curious from "../../assets/features/Curious.svg";
import responsive from "../../assets/features/Responsive.svg";
import accessibility from "../../assets/features/Accessibility.svg";
import goal from "../../assets/features/Goal.svg";
import development from "../../assets/features/Development.svg";
import FeaturesItem from "./FeaturesItem";

function FeaturesList() {
  const features = [
    {
      id: 1,
      title: "Attention to details",
      desc: "Delivering a pixel-perfect websites is crucial part in frontend development.",
      icon: curious,
      iconAlt: "Attention to details, illustration.",
    },
    {
      id: 2,
      title: "Responsive web design",
      desc: "Creating websites that adapt effectively with various screen sizes and devices.",
      icon: responsive,
      iconAlt: "Responsive web design, illustration.",
    },
    {
      id: 3,
      title: "Accessibility standards",
      desc: "Everyone should be able to easily understand what you want to show them, under any circumstances.",
      icon: accessibility,
      iconAlt: "Accessibility standards, illustration",
    },
    {
      id: 4,
      title: "Continuous learning",
      desc: "As hard as I can, I'm trying to stay up-to-date with latest trends, technologies, and best practices in frontend development.",
      icon: goal,
      iconAlt: "Continuous learning, illustration.",
    },
    {
      id: 5,
      title: "Web development",
      desc: "I also have a basic knowledge in UI/UX design and backend development.",
      icon: development,
      iconAlt: "Web development, illustration.",
    },
  ];

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
