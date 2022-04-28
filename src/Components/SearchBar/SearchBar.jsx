import React, { useState } from "react";
import "./SearchBar.css";
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
    props.setSongs(response);
    setSongSearch("");
    if (songSearch === "") {
      props.getAllSongs();
    }
  }

  return (
    <div className="nav-bar">
      <div className="navbar">
        <a href="#add-song">
          <button className="add">Add A New Song</button>
        </a>
      </div>{" "}
      <h1 className="heading">Music Library</h1>
      <form onSubmit={searchResults}>
        <div>
          <input className='user-input'
            type="text"
            value={songSearch}
            onChange={(e) => setSongSearch(e.target.value)}
            placeholder="Search here..."
          />{" "}
          <button className ='search' type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
