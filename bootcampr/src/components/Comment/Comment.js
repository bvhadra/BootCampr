import React from "react";
import "./Comment.css";

function Comment({ commentName, commentPost }) {
  return (
    <div className="Comment">
      <p id="commentname">{commentName}</p>
      <p id="commentcontent">{commentPost}</p>
    </div>
  );
}

export default Comment;
