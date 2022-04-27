import React, { useState } from "react";
import "../DisplayMusic/DisplayMusic";

const SearchBar = (props) => {
  const [songSearch, setSongSearch] = useState("");

function searchResults(event) {
    event.preventDefault();
    let response = props.songs.filter((song) => {
      if (song.album.includes(songSearch)) {
        return true;
      } else if (song.artist.includes(songSearch)) {
        return true;
      } else if (song.title.includes(songSearch)) {
        return true;
      } else if (song.genre.includes(songSearch)) {
        return true;
      } else if (song.release_date.includes(songSearch)) {
        return true;
      }
    });
    console.log(response)
  }

  return (
    <form onSubmit={searchResults}>
      <div>
        <h1>Music Library</h1>
        <input
          type="text"
          value={songSearch}
          onChange={(e) => setSongSearch(e.target.value)}
          placeholder="Search here..."
        />{" "}
        <button type="submit">Search</button>
      </div>{" "}
    </form>
  );
};

export default SearchBar;
