import { useState } from "react";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";

function CommentList() {
  // state for the comments array
  const [comments, setComments] = useState([]);
  // function to create a new Comment and add to the comments array
  const handleNewComment = (commentName, commentPost) => {
    const newComment = {
      id: Math.random().toString(36),
      commentName: commentName,
      commentPost: commentPost,
    };
    setComments([...comments, newComment]);
  };

  return (
    <div className="comment-list">
      {comments.map((e) => (
        <Comment commentName={e.commentName} commentPost={e.commentPost} />
      ))}
      <CommentForm handleNewComment={handleNewComment} />
    </div>
  );
}

export default CommentList;
