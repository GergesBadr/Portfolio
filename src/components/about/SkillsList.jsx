import { useRef } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { skills } from "../../data/constants";
import Modal from "../common/Modal";
import SkillsItem from "./SkillsItem";
import SkillsModal from "./SkillsModal";

function SkillsList() {
  const skillsListRef = useRef(null);

  return (
    <section className="space-y-14">
      <div className="px-6 text-center">
        <h2 className="heading-2">My skills</h2>
        <p className="text-lg opacity-75">
          Programming languages and tools I can work with
        </p>
      </div>

      <div
        ref={skillsListRef}
        className="responsive-container relative border-b-2 border-b-gray-300 pb-80 dark:border-b-gray-700"
      >
        {/* Info */}
        <div className="absolute -top-10 right-0 space-y-2 lg:-top-20 lg:right-20">
          <p className="rotate-[6deg] text-lg font-medium">Drag & Drop!</p>
          <svg
            className="mx-auto"
            width="36"
            height="36"
            viewBox="0 0 27 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-primary-dark dark:fill-white"
              d="M11.5 2.00098C18.7 -2.39902 24.5 1.83431 26.5 4.50098C24 2.00098 18.5 -0.499023 11.5 3.30507C5.9 6.34834 4.16667 12.3704 4 15.001C4.59077 14.501 5.91784 13.301 6.5 12.501C7.08216 11.701 8.0759 12.1676 8.5 12.501C8 13.001 6.75446 14.301 5.7723 15.501C4.54461 17.001 2 17.001 2 15.501C2 14.301 0.666666 10.6676 0 9.00098C1.2 9.40098 2.5 12.501 3 14.001C2.83333 11.8343 4.3 6.40098 11.5 2.00098Z"
            />
          </svg>
        </div>

        {/* Modal */}
        <Modal>
          <Modal.Window id="skills-modal" a11yName="More information on skills">
            <SkillsModal />
          </Modal.Window>

          <Modal.Open id="skills-modal" widthIsFit={true}>
            <button
              aria-label="Open skills modal information"
              className="z-[2] flex items-center justify-center"
            >
              <HiEllipsisVertical className="absolute size-8 text-primary-dark dark:text-white" />
              <span className="animate-customPing size-8 rounded-full bg-indigo-400 dark:bg-indigo-600"></span>
            </button>
          </Modal.Open>
        </Modal>

        {/* Draggable skills */}
        {skills.map((skill) => {
          return (
            <SkillsItem
              key={skill.id}
              skill={skill}
              parentRef={skillsListRef}
            />
          );
        })}
      </div>
    </section>
  );
}

export default SkillsList;
