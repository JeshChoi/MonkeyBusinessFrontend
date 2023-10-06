import React, { useState } from 'react';
import Cookies from "js-cookie";

const MakeComment = ({postId, commenterId, onCommentSubmit }) => {
  const [comment, setComment] = useState('');
  const jsonString = Cookies.get('user');
  const user = JSON.parse(jsonString)
  
  const handleSubmit = (e) => {
    
    if (!comment.trim()) {
      // You might want to handle empty comment submission here
      return;
    }
    
    console.log(`postId: ${postId}, commenterId: ${user._id}, commenterUser: ${user.username}`)

    onCommentSubmit(comment);

    // Clear the textarea after submitting
    setComment('');

    e.preventDefault()
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <textarea
          className="resize-none border  rounded-md p-2 mb-2"
          placeholder="Type your comment here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
        />
        <button type="submit" className="border bg-slate-100 hover:bg-yellow-100 text-black font-bold py-2 px-4 rounded">
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default MakeComment;
