import "./SearchBar.css";
import SearchIcon from "../icon-components/SearchIcon";

function SearchBar() {
  return (
    <>
      <div className="searchbar-container">
        <div className="icon-input-container">
          <SearchIcon />
          <form>
            <input
              className="search-input"
              type="text"
              placeholder="Search GitHub Username..."
            />
          </form>
        </div>
        <button className="search-btn" type="submit">
          Search
        </button>
      </div>
    </>
  );
}

export default SearchBar;
