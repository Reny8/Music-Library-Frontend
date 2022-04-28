import "./DisplayMusic.css";
import Buttons from "./Buttons.jsx";
import axios from 'axios'

const DisplayMusic = (props) => {
  async function updateLikes(songPk) {
    let response = await axios.patch(`http://127.0.0.1:8000/music/${songPk}/`);
    if (response.status === 202) await props.getAllSongs();
  }
  async function updateSong(songPk) {
    let response = await axios.put(`http://127.0.0.1:8000/music/${songPk}/`);
    if (response.status === 200) console.log(response.data);
  }

  async function deleteSong(songPk) {
    let response = await axios.delete(`http://127.0.0.1:8000/music/${songPk}/`);
    if (response.status === 204) console.log(response.data);
  }
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ALBUM</th>
            <th scope="col">ARTIST</th>
            <th scope="col">TITLE</th>
            <th scope="col">GENRE</th>
            <th scope="col">RELEASE DATE</th>
          </tr>
        </thead>
        <tbody>
          {props.songs.map((song) => {
            return (
              <tr key={song.id} scope="row">
                <td>
                  <img src={song.album_image} />
                  {song.album}
                </td>
                <td>{song.artist}</td>
                <td>{song.title}</td>
                <td>{song.genre}</td>
                <td>{song.release_date}</td>
                <Buttons songs = {song} updateLikes={updateLikes} updateSong={updateSong} deleteSong={deleteSong}/>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayMusic;
