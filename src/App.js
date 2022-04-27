import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import SearchBar from "./Components/SearchBar/SearchBar";
function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  });

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/music/");
    setSongs(response.data);
  }

  return (
    <div>
      <ul>
        <li>
          <h1>Music Library</h1>
        </li>
        <li>
          <SearchBar />
        </li>
      </ul>
      <DisplayMusic songs={songs} />
    </div>
  );
}

export default App;
