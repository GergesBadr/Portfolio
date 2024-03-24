import { motion } from "framer-motion";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

function PostItemThumbnail({ post, index }) {
  const postVariants = {
    hidden: { y: 125, opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.07 * index },
    }),
  };

  return (
    <motion.li
      className="rounded-lg bg-white p-6 shadow-sm dark:bg-secondary-dark"
      variants={postVariants}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      custom={index}
      viewport={{ once: true }}
    >
      <Link to={`/blog/${post.urlTitle}`} className="group space-y-4">
        <div>
          <p className="unique-text mb-2 text-xl font-semibold tracking-wide">
            {post.title}
          </p>
          <p className="sec-text">
            <span> {format(post.date, "MMM, dd, yyyy")} </span>
            <span> &mdash; {post.category} </span>
          </p>
        </div>
        <p>{post.introduction}</p>
        <div className="group-hover:unique-text flex items-center gap-2 font-medium">
          <p>Read more</p>
          <HiArrowRight className="text-lg duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.li>
  );
}

export default PostItemThumbnail;
