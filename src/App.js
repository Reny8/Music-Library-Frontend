import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import SearchBar from "./Components/SearchBar/SearchBar";
import AddSong from "./Components/AddSong/AddSong";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/music/");
    setSongs(response.data);
  }
  function newSong(newSong) {
    let tempSong = [...songs, newSong];
    setSongs(tempSong)
  }

  return (
    <div>
      <div>
        <SearchBar songs={songs} setSongs={setSongs} />
      </div>
      <hr/>
      <h3>Add A Song Here</h3>
      <div>
        <AddSong songs = {songs} newSong= {newSong}/>
      </div>
      <div>
        <DisplayMusic songs={songs} />
      </div>
    </div>
  );
}

export default App;
