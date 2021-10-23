import "../styles/SearchBar.css";
import SearchIcon from "../icon-components/SearchIcon";

function SearchBar(props) {
  return (
    <div className="searchbar-container">
      <SearchIcon />
      <form onSubmit={props.onSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search GitHub Username..."
          {...props}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
