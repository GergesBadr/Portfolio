import { motion } from "framer-motion";

function Spinner() {
  return (
    <motion.div
      className="mx-auto size-14 rounded-full border-4 border-indigo-600 border-b-transparent"
      animate={{ rotate: [0, 360] }}
      transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
    ></motion.div>
  );
}

export default Spinner;
