import { motion } from "framer-motion";

function AnimatedText({ children }) {
  const textVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 95, damping: 15 },
    },
  };

  return (
    <motion.div
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "100px" }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedText;
