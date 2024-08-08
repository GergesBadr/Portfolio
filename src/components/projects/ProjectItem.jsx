import { motion } from "framer-motion";
import PrimaryButton from "../common/PrimaryButton";
import Modal from "../common/Modal";
import ProjectDetails from "./ProjectDetails";

function ProjectItem({ project, index }) {
  const { id, image, title, description } = project;

  const variants = {
    initial: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: { delay: 0.1 * index },
    }),
  };

  return (
    <motion.li
      className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm dark:bg-secondary-dark"
      variants={variants}
      initial="initial"
      whileInView="visible"
      custom={index}
      viewport={{ once: true }}
    >
      <img
        src={image}
        alt={`Screenshot of ${title} project.`}
        loading="lazy"
        className="w-full rounded-xl object-center h-[300px] object-cover"
      />

      <div className="flex grow flex-col justify-between">
        <div>
          <h2 className="heading-2 my-4">{title}</h2>
          <p className="sec-text mb-4 text-lg">{description}</p>
        </div>

        <Modal>
          <Modal.Window id={id} a11yName={`${project.title} project details`}>
            <ProjectDetails project={project} />
          </Modal.Window>

          <Modal.Open id={id}>
            <PrimaryButton
              ariaLabel={`More details about ${title} project`}
              allowAnimate={false}
              moreStyles="w-full"
            >
              More details
            </PrimaryButton>
          </Modal.Open>
        </Modal>
      </div>
    </motion.li>
  );
}

export default ProjectItem;
