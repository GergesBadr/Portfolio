import { motion } from "framer-motion";

function PrimaryButton({
  children,
  onClick,
  variation,
  moreStyles,
  allowAnimate = true,
  ariaLabel,
}) {
  return (
    <motion.button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`rounded-lg px-6 py-2 font-medium text-gray-100 ${
        variation === "sec"
          ? "border-2 border-indigo-600 bg-transparent text-indigo-600 dark:text-gray-100"
          : "bg-indigo-600"
      } ${moreStyles}`}
      whileHover={{ scale: allowAnimate ? 1.1 : 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.button>
  );
}

export default PrimaryButton;
