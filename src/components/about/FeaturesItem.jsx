import { motion } from "framer-motion";

function FeaturesItem({ feature }) {
  const isEven = feature.id % 2 === 0;

  return (
    <motion.div
      className="space-y-3 rounded-2xl border-2 border-gray-200 p-6 dark:border-gray-800"
      whileHover={{ scale: 1.05, rotate: isEven ? 3 : -3 }}
    >
      <img
        src={feature.icon}
        alt={feature.iconAlt}
        loading="lazy"
        className="mx-auto size-44"
      />
      <p className="text-[clamp(1.5rem,4vw,2rem)] font-medium">
        {feature.title}
      </p>
      <p className="opacity-75 text-lg"> {feature.desc} </p>
    </motion.div>
  );
}

export default FeaturesItem;
