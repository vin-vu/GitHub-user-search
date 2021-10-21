// import { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "../icon-components/SearchIcon";

function SearchBar(props) {
  // const [input, setInput] = useState("");

  return (
    <>
      <div className="searchbar-container">
        <div className="icon-input-container">
          <SearchIcon />
          <form onSubmit={props.onSubmit}>
            <input
              className="search-input"
              type="text"
              // onChange={(e) => setInput(e.target.value)}
              placeholder="Search GitHub Username..."
              {...props}
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
