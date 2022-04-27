import "./DisplayMusic.css"
const DisplayMusic = (props) => {
   

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Album Cover</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {props.songs.map((song) => {
            return <tr key={song.id}>
                <td><img src = {song.album_image} alt = 'Album Image'/></td>
                <td>{song.album}</td>
                <td>{song.artist}</td>
                <td>{song.title}</td>
                <td>{song.genre}</td>
                <td>{song.release_date}</td>
            </tr>;
          })}
        </tbody>
      </table>
      ))
    </div>
  );
};

export default DisplayMusic;
