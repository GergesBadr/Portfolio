import { HiOutlineInformationCircle } from "react-icons/hi2";

function Note({ children }) {
  return (
    <div className="relative my-8 rounded-r-lg border-l-4 border-l-indigo-600 bg-white p-6 shadow-sm dark:bg-secondary-dark">
      <HiOutlineInformationCircle className="absolute -left-5 -top-1 size-10 rounded-full bg-white text-indigo-600 dark:bg-secondary-dark dark:text-indigo-500" />
      <div className="[&_*:last-child]:mb-0">{children}</div>
    </div>
  );
}

export default Note;
