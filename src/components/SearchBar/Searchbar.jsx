import { useDispatch } from "react-redux";
import { useState } from "react";

import "./SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [searchIn, setSearch] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({ type: "FETCH_SEARCH_RESULTS", payload: searchIn });
    setSearch("");
    setIsDisabled(true);
  };

  return (
    <div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Dogs, reactions, etc."
          value={searchIn}
          onChange={(e) => {
            setSearch(e.target.value);
            setIsDisabled(false);
          }}
        />
        <button
          type="submit"
          className="material-symbols-outlined search-btn"
          onClick={handleSearch}
          disabled={isDisabled}
        >
          Search
        </button>
      </form>
    </div>
  );
}
