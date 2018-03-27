import React, { Component } from "react";
import comments from "../data/comments";
import T from "prop-types";

import "../style/postComments.css";


export default class PostComment extends Component {

  render() {

    const { postId: id } = this.props;
    return comments.map((comment) => {
      const { postId, email, name, body } = comment;
      if (postId !== id) return;
      return (
        <div className="comment" key={postId + body.length + email}>
          <div className="commentEmail">{email}</div>
          <hr />
          <div className="commentName">{name}</div>
          <div className="commentBody">{body}</div>
        </div>
      );
    });
  }
}

PostComment.T = {
  postId: T.number.isRequired,
};