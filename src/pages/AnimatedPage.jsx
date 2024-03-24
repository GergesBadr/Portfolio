import { motion } from "framer-motion";

function AnimatedPage({ children }) {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // 62px (header height) + 32px (header space from the top) = 94px
  // + Space between the header and page content. SO, 128px margin top is fine (mt-32).
  return (
    <motion.main
      className="mt-10 min-h-[65dvh] space-y-16 sm:mt-32"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeInOut", type: "tween" }}
    >
      {children}
    </motion.main>
  );
}

export default AnimatedPage;
