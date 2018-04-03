import React from 'react';
import '../style/comments.css';

const Comments = ({ comments }) => (
  comments
    .map(({ email, body, id }) => {
      return (
        <li key={id} className="singleComment">
          <div className="commentsEmail">{email}</div>
          <hr />
          <div className="commentsBody">{body}</div>
        </li>
      );
    })
);
export default Comments;
