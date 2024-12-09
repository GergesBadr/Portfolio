import { HiExclamationTriangle, HiLink } from "react-icons/hi2";

function ReposError({ err }) {
  return (
    <div className="mx-4 flex w-fit flex-col items-center gap-6 rounded-lg bg-white p-8 text-center text-red-600 shadow-sm dark:bg-secondary-dark dark:text-red-500 sm:mx-auto">
      <HiExclamationTriangle className="size-20" />
      <p> {err} </p>

      <a
        href="https://github.com/GergesBadr"
        target="_blank"
        className="unique-text flex items-center gap-1 hover:underline"
      >
        <span>Or: Visit my GitHub account</span>
        <HiLink />
      </a>
    </div>
  );
}

export default ReposError;
