import React from "react";
import "./NewPost.css";
import CommentList from "../CommentList/CommentList";

// props needed from app to show name, category and post from InputForm.
function NewPost({ id, name, category, post }) {
  const categoryClassName = `${category}`;

  return (

    <div>
      <div className={categoryClassName}>
        <h3>{name}</h3>
        <h6>#{category}</h6>
        <p id="post">{post}</p>
      </div>
      <div className={categoryClassName}>
        <CommentList />
      </div>
    </div>
  );
}

export default NewPost;
