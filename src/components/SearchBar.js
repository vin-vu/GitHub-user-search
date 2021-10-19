import "./SearchBar.css";
import SearchIcon from "../icon-components/SearchIcon";

function SearchBar() {
  return (
    <div className="searchbar-container">
      <SearchIcon />
      <input className="search-input" type="text" placeholder="Search GitHub Username..."></input>
    </div>
  )
}

export default SearchBar;