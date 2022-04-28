import "./DisplayMusic.css";
const DisplayMusic = (props) => {
  return (
    <div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>ALBUM</th>
            <th scope='col'>ARTIST</th>
            <th scope='col'>TITLE</th>
            <th scope='col'>GENRE</th>
            <th scope='col'>RELEASE DATE</th>
          </tr>
        </thead>
        <tbody>
          {props.songs.map((song) => {
            return (
              <tr key={song.id}>
                <td>
                  <img src={song.album_image}/> {song.album}
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
