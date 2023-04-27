import React, { useState } from "react";
import "./CommentForm.css";

function CommentForm({ handleNewComment }) {
  const [commentName, setCommentName] = useState("");
  const [commentPost, setCommentPost] = useState("");

  function handleCommentSubmit() {
    handleNewComment(commentName, commentPost);
    setCommentName("");
    setCommentPost("");
  }

  return (
    <div className="comment-form">
      <input
        type="text"
        name="commentName"
        placeholder="Name...."
        value={commentName}
        onChange={(e) => setCommentName(e.target.value)}
        maxLength={30}
      ></input>
      <textarea
        type="text"
        name="comment"
        rows="3"
        placeholder="Comment...."
        value={commentPost}
        onChange={(e) => setCommentPost(e.target.value)}
        maxLength={100}
      ></textarea>
      <button id="comment-button" onClick={handleCommentSubmit}>
        Submit
      </button>
    </div>
  );
}

export default CommentForm;
