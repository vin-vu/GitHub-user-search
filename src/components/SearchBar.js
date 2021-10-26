import "../styles/SearchBar.css";
import SearchIcon from "../icon-components/SearchIcon";

function SearchBar({value, onChange, onSubmit}) {
  return (
    <div className="searchbar-container">
      <SearchIcon />
      <form onSubmit={onSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search GitHub Username..."
          value={value}
          onChange={onChange}
          onSubmit={onSubmit}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
