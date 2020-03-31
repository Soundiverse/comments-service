import React from 'react';
import CommentsEntry from './commentsEntry.jsx';
import commentsIcon from '../images/comments-icon.png';

const CommentsList = ({ comments, addReply }) => (
  <div className="CM-comment-section">
    <div className='CM-commentLength'>
      <img className="CM-comments-icon" src="https://theholybucket.s3-us-west-1.amazonaws.com/projectaudibly/comments-icon.png" alt="" />
      {`${comments.length} comments`}
    </div>
    <div className="CM-commentList">
      {comments.map((comment) =>
        <CommentsEntry comment={comment} addReply={addReply} key={comment._id} />
      )}
    </div>
  </div>
);


export default CommentsList;
