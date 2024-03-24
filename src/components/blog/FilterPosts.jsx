import { useSearchParams } from "react-router-dom";
import postsData from "../../data/postsData";

function FilterPosts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const postsCategories = [...new Set(postsData.map((post) => post.category))];

  function handleFilter(value) {
    searchParams.set("category", value);
    setSearchParams(searchParams);
  }

  return (
    <div className="responsive-container mt-32 flex flex-wrap items-center gap-4 sm:mt-0">
      <label htmlFor="filter-posts" className="text-lg font-medium">
        Filter posts by category:
      </label>
      <select
        name="filter-posts"
        id="filter-posts"
        className="w-56 rounded-lg bg-white p-2 dark:bg-secondary-dark"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="all">All</option>
        {postsCategories.map((category) => {
          return (
            <option key={category} value={category.toLowerCase()}>
              {category}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FilterPosts;
