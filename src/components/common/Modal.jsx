import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useRef, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import useCloseWithEsc from "../../hooks/useCloseWithEsc";
import useOutsideClick from "../../hooks/useOutsideClick";
import useFocusTrap from "../../hooks/useFocusTrap";

const ModalContext = createContext();

function Modal({ children }) {
  const [currModalId, setCurrModalId] = useState("");

  function openModal(id) {
    setCurrModalId(id);
  }

  function closeModal() {
    setCurrModalId("");
  }

  return (
    <ModalContext.Provider value={{ currModalId, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

function BackDrop({ children }) {
  return (
    <motion.div
      className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center px-4 backdrop-blur-md"
      // Animations
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

function Window({ children, id, a11yName }) {
  const { currModalId, closeModal } = useContext(ModalContext);
  const modalRef = useRef(null);

  // Close modal on esc key and on outside click
  useCloseWithEsc(currModalId, closeModal);
  useOutsideClick(modalRef, closeModal);

  // Focus trap the modal
  useFocusTrap(currModalId, "modal-window");

  const variants = {
    hidden: { y: -1000, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 1000 },
  };

  return (
    <AnimatePresence>
      {currModalId === id && (
        <BackDrop>
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-label={a11yName}
            id="modal-window"
            className="relative max-h-[90%] w-[clamp(50%,900px,100%)] overflow-y-auto rounded-lg bg-white p-7 shadow-md dark:bg-secondary-dark lg:p-10"
            // Animations
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", damping: 25, stiffness: 175 }}
          >
            <button
              aria-label="Close modal"
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-lg p-1 duration-200 hover:bg-gray-200 hover:dark:bg-gray-800"
            >
              <HiOutlineXMark className="size-7" />
            </button>

            {children}
          </motion.div>
        </BackDrop>
      )}
    </AnimatePresence>
  );
}

function Open({ children, id }) {
  const { openModal } = useContext(ModalContext);

  return <div onClick={() => openModal(id)}>{children}</div>;
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
