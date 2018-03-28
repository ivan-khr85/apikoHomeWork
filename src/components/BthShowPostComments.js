import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../style/btnShowComments.css";
import "../style/postListItem.css";


export default class BtnShowPostComments extends Component {

  render() {
    const path = `comments/${this.props.postId}`;

    return (
      < Link to={{ pathname: path }}>
        <div className="btnComments">
          OPEN COMMENTS
        </ div>
      </Link >
    );
  }
}
