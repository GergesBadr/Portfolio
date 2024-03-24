import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function SkillsItem({ skill, parentRef }) {
  const [randomPositionX, setRandomPositionX] = useState(getRandomPositionX());
  const randomPositionY = Math.random() * 150;

  // Randomly position each skill in vertically based on the screen size for responsiveness
  function getRandomPositionX() {
    return (
      Math.random() * (window.innerWidth <= 400 ? 200 : window.innerWidth - 400)
    );
  }

  useEffect(() => {
    function handleResize() {
      setRandomPositionX(getRandomPositionX());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.img
      src={skill.icon}
      alt={`${skill.name} logo`}
      loading="lazy"
      title={skill.name}
      className="absolute size-[100px] cursor-grab sm:size-[150px]"
      style={{ top: `${randomPositionY}px`, left: `${randomPositionX}px` }}
      // Animations
      drag
      dragConstraints={parentRef}
      dragElastic={0.2}
      whileTap={{ scale: 0.85 }}
      whileDrag={{ cursor: "grabbing" }}
    />
  );
}

export default SkillsItem;
