import { useEffect, useState } from "react";
import { HiLink } from "react-icons/hi2";

function RepoItem({ repo }) {
  const [mostUsedLang, setMostUsedLang] = useState(null);
  const { updated_at, description, html_url, languages_url, name } = repo;
  const formattedDate = new Date(updated_at).toDateString().slice(3);

  // Mapping of languages to colors
  const LANGUAGE_COLORS = {
    html: "#e34c26",
    css: "#663399",
    javascript: "#f1e05a",
    typescript: "#3178c6",
    default: "#cccccc",
  };

  // Fetch languages for each repo
  useEffect(() => {
    async function fetchLanguages() {
      const res = await fetch(languages_url);
      const data = await res.json();
      // Get the most used language
      const mostUsed = Object.entries(data).reduce(
        (max, [language, score]) =>
          score > max.score ? { language, score } : max,
        { language: null, score: 0 },
      );

      setMostUsedLang(mostUsed.language.toLowerCase());
    }

    fetchLanguages();
  }, [languages_url]);

  // Set the color for languages
  const langColor =
    mostUsedLang && LANGUAGE_COLORS[mostUsedLang]
      ? LANGUAGE_COLORS[mostUsedLang]
      : LANGUAGE_COLORS.default;

  return (
    <li className="flex flex-col gap-4 rounded-lg bg-white px-6 py-4 shadow-sm dark:bg-secondary-dark">
      <a
        href={html_url}
        target="_blank"
        className="unique-text flex w-fit items-center gap-1 text-xl font-medium hover:underline"
      >
        <span>{name}</span>
        <HiLink className="size-4" />
      </a>

      <p className="sec-text">
        {description || "No description available for this repo."}
      </p>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
        {mostUsedLang && (
          <p className="flex items-center gap-2">
            <span
              className="block size-4 rounded-full"
              style={{ backgroundColor: langColor }}
            ></span>
            <span> {mostUsedLang} </span>
          </p>
        )}
        <p className="sec-text text-sm">Updated on {formattedDate}</p>
      </div>
    </li>
  );
}

export default RepoItem;
