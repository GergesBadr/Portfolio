import { HiOutlineInformationCircle } from "react-icons/hi2";

function Note({ children }) {
  return (
    <div className="my-8 flex items-start gap-6 rounded-r-lg border-l-4 border-l-indigo-600 bg-white p-5 shadow-sm dark:bg-secondary-dark">
      <HiOutlineInformationCircle className="size-10 shrink-0 text-indigo-600 dark:text-indigo-500" />
      <div className="[&_*:last-child]:mb-0">{children}</div>
    </div>
  );
}

export default Note;
