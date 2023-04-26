import React, { useState } from 'react'
import './CommentForm.css'

function CommentForm() {
  return (
    <div className='CommentForm'>
    <input type="text" name="commentName" id="commentName" placeholder="Name...."></input>
    <textarea type="text" name="comment" id="commentarea" rows="3" placeholder="Comment...."></textarea>
    <button>Submit</button>

    </div>
  )
}

export default CommentForm;