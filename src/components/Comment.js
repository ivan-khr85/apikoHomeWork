import React, { Component } from "react";
import comments from "../data/comments";
import { number } from "prop-types";

import "../style/postComments.css";


export default class Comment extends Component {

  render() {
    return comments
      .filter(({ postId }) => postId === this.props.postId)
      .map(({ id, email, name, body }) => {
        return (
          <div className="comment" key={id}>
            <div className="commentEmail">{email}</div>
            <hr />
            <div className="commentName">{name}</div>
            <div className="commentBody">{body}</div>
          </div>
        );
      });
  }
}

Comment.propTypes = {
  postId: number.isRequired,
};