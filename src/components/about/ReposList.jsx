import { useEffect, useState } from "react";
import Spinner from "../common/Spinner";
import ReposError from "./ReposError";
import RepoItem from "./RepoItem";

function ReposList() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState("");

  // Fetch and sort repos data in descending order - to get the newest {NUMBER_OF_REPOS} ones
  useEffect(() => {
    const USER_NAME = "gergesbadr";
    const NUMBER_OF_REPOS = 5;

    async function fetchRepos() {
      setIsLoading(true);
      setHasError("");
      try {
        const res = await fetch(
          `https://api.github.com/users/${USER_NAME}/repos`,
        );
        if (!res.ok) {
          setHasError(
            "Sorry, something went wrong while fetching repositories. Try again later!",
          );
        }
        const data = await res.json();

        const dataWithoutCustomRepo = data.filter(
          (repo) => repo.name !== "GergesBadr",
        );

        const sortedData = dataWithoutCustomRepo
          .sort((a, b) => new Date(b.updated_at) - new Date(a.created_at))
          .slice(0, NUMBER_OF_REPOS);

        setRepos(sortedData);
      } catch {
        setHasError(
          "Sorry, something went wrong while fetching repositories. Try again later!",
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return (
    <section className="space-y-14">
      <div className="px-6 text-center">
        <h2 className="heading-2"> My GitHub repositories </h2>
        <p className="text-lg opacity-75">
          Have a closer look at my recent work
        </p>
      </div>

      {isLoading && <Spinner />}
      {hasError && <ReposError err={hasError} />}

      {!isLoading && !hasError ? (
        <ul className="responsive-container grid grid-cols-[repeat(auto-fill,minmax(375px,1fr))] gap-6">
          {repos.map((repo) => {
            return <RepoItem key={repo.id} repo={repo} />;
          })}
        </ul>
      ) : null}
    </section>
  );
}

export default ReposList;
