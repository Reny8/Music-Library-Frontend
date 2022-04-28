import React, { useState } from "react";
import "./AddSong.css";
const AddSong = (props) => {
  const [album_image, setAlbumImage] = useState("");
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [release_date, setReleaseDate] = useState("");

  function Add(event) {
    event.preventDefault();
    let newSong = {
      title: title,
      artist: artist,
      album: album,
      release_date: release_date,
      genre: genre,
      likes: 0,
      album_image: album_image,
    };
    props.newSong(newSong);
    setAlbumImage("");
    setAlbum("");
    setArtist("");
    setTitle("");
    setGenre("");
    setReleaseDate("");
  }

  return (
    <form className="create" onSubmit={Add}>
      <div className="form-group">
        <h3>Add A Song Here</h3>
        <label>Album Image</label>
        <input
          value={album_image}
          className="form-control"
          placeholder="Add a url of your image..."
          onChange={(event) => setAlbumImage(event.target.value)}
        />
        <label>Album</label>
        <input
          value={album}
          className="form-control"
          onChange={(event) => setAlbum(event.target.value)}
        />
        <label>Artist</label>
        <input
          value={artist}
          className="form-control"
          onChange={(event) => setArtist(event.target.value)}
        />
        <label>Title</label>
        <input
          value={title}
          className="form-control"
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Genre</label>
        <input
          value={genre}
          className="form-control"
          onChange={(event) => setGenre(event.target.value)}
        />
        <label>Release Date</label>
        <input
          value={release_date}
          className="form-control"
          placeholder="yyyy-mm-dd"
          onChange={(event) => setReleaseDate(event.target.value)}
        />
      </div>
      <div className="around-button">
        <button class="add-song" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddSong;
