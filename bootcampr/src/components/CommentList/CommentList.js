import { useState } from "react";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";

function CommentList({ category, commentListId }) {
  // state for the comments array
  const [comments, setComments] = useState([]);
  // function to create a new Comment and add to the comments array
  const handleNewComment = (commentName, commentPost) => {
    const newComment = {
      commentId: comments.length  ,
      commentName: commentName,
      commentPost: commentPost,
    };
    setComments([...comments, newComment]);
  };

  return (
    <div className="comment-list" commentListId={commentListId}>
      {comments.map((e) => (
        <Comment
          id={comments.length}
          commentName={e.commentName}
          commentPost={e.commentPost}
          className={category}
        />
      ))}
      <CommentForm handleNewComment={handleNewComment} />
    </div>
  );
}

export default CommentList;
