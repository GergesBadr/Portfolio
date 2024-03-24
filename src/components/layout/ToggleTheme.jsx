import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

function ToggleTheme() {
  const { theme, handleThemeSwitch } = useTheme();
  const isLightMode = theme === "light";

  const themeVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
  };

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.button
        key={isLightMode ? "moon" : "sun"}
        aria-label={isLightMode ? "Apply dark mode" : "Apply light mode"}
        onClick={handleThemeSwitch}
        variants={themeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: "spring", stiffness: 75 }}
      >
        {isLightMode ? (
          <HiOutlineMoon className="size-6" />
        ) : (
          <HiOutlineSun className="size-6" />
        )}
      </motion.button>
    </AnimatePresence>
  );
}

export default ToggleTheme;
