import React, { useState } from "react";
import "./NewPost.css";
import CommentForm from "../CommentForm/CommentForm";
import dummyComments from "../data/dummyComments";
import Comment from "../Comment/Comment";

// props needed from app to show name, category and post from InputForm.
function NewPost({ name, category, post }) {
  const categoryClassName = `${category}`
  
const [comments, setComments] = useState(dummyComments)

  const handleNewComment = (commentName, commentPost) => {
    const newComment = {
      id: Math.random().toString(36),
      commentName: commentName,
      commentPost: commentPost,
    };
    setComments([...comments, newComment]);
  };

  return (
    <div className={categoryClassName}>
      <h3>{name}</h3>
      <h6>{category}</h6>
      <p>{post}</p>
      {comments.map((e)=> (
        <Comment commentName={e.commentName} commentPost={e.commentPost}/>
      ))}
      <CommentForm handleNewComment={handleNewComment}/>
    </div>
  );
}

export default NewPost;
