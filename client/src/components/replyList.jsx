import React from 'react';
import ReplyEntry from './replyEntry.jsx';

const ReplyList = ({replies}) => (
  <div>
    {replies.map((reply) => 
      <ReplyEntry reply={reply} key={reply._id} />,
    )}
  </div>
);

export default ReplyList;
