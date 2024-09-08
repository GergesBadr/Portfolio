import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import ToggleTheme from "./ToggleTheme";
import { links } from "../../data/constants";

function Header() {
  const onSmallScreens = window.innerWidth < 640;
  const [isOpenHeader, setIsOpenHeader] = useState(!onSmallScreens);

  const listVariants = {
    hidden: {
      clipPath: "circle(0% at 85% 5%)",
      transition: {
        when: "acterChildren",
        staggerChildren: 0.05,
        duration: 0.4,
      },
    },
    visible: {
      clipPath: "circle(100% at 50% 50%)",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 300, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "tween" } },
  };

  return (
    <>
      {/* Show and hide header - mobile screens */}
      <button
        aria-label={isOpenHeader ? "Close header" : "Open header"}
        onClick={() => setIsOpenHeader(!isOpenHeader)}
        className="fixed right-4 top-4 z-[2] flex size-14 items-center justify-center rounded-full bg-white dark:bg-secondary-dark sm:hidden"
      >
        <HiBars3BottomRight className="size-8" />
      </button>

      <motion.header
        className={`fixed right-0 top-0 z-[1] flex h-dvh w-[75%] flex-col items-start gap-6 overflow-hidden bg-white px-6 py-20 shadow-primary-shadow-light dark:bg-secondary-dark dark:shadow-primary-shadow-dark sm:left-1/2 sm:top-8 sm:h-auto sm:w-fit sm:-translate-x-1/2 sm:flex-row sm:items-center sm:rounded-full sm:py-5 `}
        variants={listVariants}
        initial={isOpenHeader ? "visible" : "hidden"}
        animate={isOpenHeader ? "visible" : "hidden"}
      >
        <nav>
          <ul className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            {links.map((link) => {
              return (
                <motion.li key={link.to} variants={itemVariants}>
                  <NavLink
                    tabIndex={!isOpenHeader ? -1 : null}
                    to={link.to}
                    className={({ isActive }) =>
                      `relative pb-2 font-medium before:absolute before:bottom-0 before:left-0 before:h-1 before:rounded-full before:bg-indigo-500 before:duration-300 ${isActive ? "before:w-full" : "before:w-0"}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              );
            })}
          </ul>
        </nav>
        <ToggleTheme />
      </motion.header>
    </>
  );
}

export default Header;
