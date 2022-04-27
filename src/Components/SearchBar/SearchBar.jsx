import React, { useState } from "react";

const SearchBar = (props) => {
async function handleSubmit(event) {
    event.preventDefault()
}
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Music Library</h1>
        <input type="text" placeholder="Search here..." />{" "}
        <button type='submit'>Search</button>
      </div>
    </form>
  );
};

export default SearchBar;
