/* eslint-disable react/no-unescaped-entities */
import { PiHandWaving } from "react-icons/pi";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCloudArrowDown,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PrimaryButton from "../common/PrimaryButton";

function LandingSection() {
  const navigate = useNavigate();
  const name = "Gerges Badr";

  const childrenVariants = {
    hidden: { opacity: 0 },
    visible: (index) => ({ opacity: 1, transition: { delay: 0.085 * index } }),
  };

  return (
    <section className="h-[65dvh]">
      {/* Gradient background */}
      <div className="absolute left-0 top-0 -z-10 h-[80dvh] w-full bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-400 opacity-30 blur-3xl dark:opacity-25"></div>

      <div className="mx-auto max-w-[700px] px-6 text-center">
        <p className="text-2xl tracking-wider">
          <motion.span
            className="inline-block origin-[70%_70%]"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 1,
              repeatType: "loop",
            }}
          >
            <PiHandWaving className="mr-2 inline-block size-10" />
          </motion.span>
          Hey there! I'm
        </p>

        <h1 className="my-2 font-dancing-script text-[clamp(3.5rem,7vw,6rem)] font-black">
          {name.split("").map((char, index) => {
            return (
              <motion.span
                key={index}
                variants={childrenVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                {char}
              </motion.span>
            );
          })}
        </h1>

        <p className="sec-text mb-6 text-lg leading-relaxed">
          A passionate Frontend developer based in Egypt. I build pixel-perfect,
          engaging, and accessible digital experiences. I'll help you build
          beautiful websites, turning ideas into visually appealing and
          functional web solutions.
        </p>
        <div className="space-x-6">
          <PrimaryButton onClick={() => navigate("/contact")}>
            Let's talk
            <HiOutlineChatBubbleBottomCenterText className="mb-[2px] ml-2 inline-block size-5" />
          </PrimaryButton>

          <motion.a
            href="GergesBadr-CV.pdf"
            download
            target="_blank"
            className="inline-block rounded-lg border-2 border-indigo-600 bg-transparent px-6 py-2 font-medium text-indigo-600 dark:text-gray-100"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Download CV
            <HiOutlineCloudArrowDown className="mb-[2px] ml-2 inline-block size-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
