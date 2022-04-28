import React, { useState } from "react";

const Buttons = (props) => {
  function handleLikes(id) {
  props.updateLikes(id)
  }



  return (
    <td>
      <button onClick={()=> handleLikes(props.songs.id)}>
        Like {props.songs.likes}
      </button>
      <button>Update</button>
      <button>Delete</button>
    </td>
  );
};

export default Buttons;
