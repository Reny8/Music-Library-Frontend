import React, { useState} from 'react';

const AddSong = (props) => {
const [album_image, setAlbumImage] = useState("")
const [album, setAlbum] = useState("")
const [artist, setArtist] = useState("")
const [title, setTitle] = useState("")
const [genre, setGenre] = useState("")
const [release_date, setReleaseDate] = useState("")

function Add(event) {
    event.preventDefault()
    let newSong = {
        title: title,
        artist: artist,
        album: album,
        release_date: release_date,
        genre: genre,
        likes: 0,
        album_image:album_image,
    }
    props.newSong(newSong)
}



    return (
       <form onSubmit={Add}>
        <div className= 'form-group'>
            <label>Album Image</label>
            <input value={album_image} className= 'form-control' placeholder='Add a url of your image...'onChange= {(event) => setAlbumImage(event.target.value)}/>
            <label>Album</label>
            <input value={album} className= 'form-control' onChange= {(event) => setAlbum(event.target.value)}/>
            <label>Artist</label>
            <input value={artist} className= 'form-control' onChange= {(event) => setArtist(event.target.value)}/>
            <label>Title</label>
            <input value={title} className= 'form-control' onChange= {(event) => setTitle(event.target.value)}/>
            <label>Genre</label>
            <input value={genre} className= 'form-control' onChange= {(event) => setGenre(event.target.value)}/>
            <label>Release Date</label>
            <input value={release_date} className= 'form-control' placeholder="yyyy-mm-dd"onChange= {(event) => setReleaseDate(event.target.value)}/>
        </div>
        <button type="submit">Add</button>
       </form>
    );
}
 
export default AddSong;