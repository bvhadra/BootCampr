import React from "react";
import "./NewPost.css";
import CommentList from "../CommentList/CommentList";

// props needed from app to show name, category and post from InputForm.
function NewPost({ id, name, category, post }) {
  const categoryClassName = `${category}`;

  return (
    <div>
      <div className={categoryClassName}>
        <p id="name">{name}</p>
        <p id="post">{post}</p>
        <p id="category">#{category}</p>
      </div>
      <div className={categoryClassName}>
        <CommentList />
      </div>
    </div>
  );
}

export default NewPost;
