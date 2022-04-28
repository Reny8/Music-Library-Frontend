import React, { useState } from "react";

const Buttons = (props) => {
  function handleLikes(id) {
    props.updateLikes(id);
  }
  function handleUpdate(id) {
    let category = prompt(
      "What would you like to change:\n album, artist,title,genre or release date"
    ).toLowerCase();
    let value = prompt(`Enter your new ${category}`);
  }

  function handleDelete(id) {
    let answer = prompt(
      "Are you sure you would like to delete? "
    ).toLowerCase();
    if (answer === "yes") {
      props.deleteSong(id);
    }
  }

  return (
    <td>
      <button onClick={() => handleLikes(props.songs.id)}>
        Like {props.songs.likes}
      </button>
      <button onClick={() => handleUpdate(props.songs.id)}>Update</button>
      <button onClick={() => handleDelete(props.songs.id)}>Delete</button>
    </td>
  );
};

export default Buttons;
