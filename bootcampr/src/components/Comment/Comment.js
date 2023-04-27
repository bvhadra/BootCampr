import React from "react";
import "./Comment.css";

function Comment({ category, commentName, commentPost }) {
  return (
    <div className={category}>
      <p>{commentName}</p>
      <p>{commentPost}</p>
    </div>
  );
}

export default Comment;
