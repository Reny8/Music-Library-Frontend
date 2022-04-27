import "./DisplayMusic.css";
const DisplayMusic = (props) => {
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>ALBUM</th>
            <th >ARTIST</th>
            <th>TITLE</th>
            <th>GENRE</th>
            <th>RELEASE DATE</th>
          </tr>
        </thead>
        <tbody>
          {props.songs.map((song) => {
            return (
              <tr key={song.id}>
                <td>
                  <img src={song.album_image} alt="Album"/> {song.album}
                </td>
                <td>{song.artist}</td>
                <td>{song.title}</td>
                <td>{song.genre}</td>
                <td>{song.release_date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayMusic;
