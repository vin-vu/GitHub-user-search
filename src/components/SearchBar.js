import { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "../icon-components/SearchIcon";

function SearchBar({ search }) {
  const [input, setInput] = useState("");
  
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
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
        <button className="search-btn" type="submit" onClick={search(input)}>
          Search
        </button>
      </div>
    </>
  );
}

export default SearchBar;
