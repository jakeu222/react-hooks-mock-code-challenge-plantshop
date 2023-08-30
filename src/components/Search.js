import React from "react";

function Search({ setSearchName }) {
  function handleChange(e) {
    e.preventDefault();

    setSearchName(e.target.value);
  }
  return (
    <div className="searchbar" onChange={handleChange} >
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
      // value={searchName}
      // onChange={handleChange}
      />
    </div>
  );
}

export default Search;
