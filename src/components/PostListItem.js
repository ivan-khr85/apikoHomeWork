import React, { Component } from "react";
import BtnShowPostComments from "./BthShowPostComments";
import { object } from "prop-types";

import "../style/postListItem.css";
export default class PostListItem extends Component {

  render() {
    const { article, showKeyComments } = this.props;


    return (
      <div className="article">
        <div className="articleTitle">{article.title}</div>
        <hr />
        <div className="articleBody">{article.body}</div>

        {showKeyComments && <BtnShowPostComments postId={article.id} article={article} />}
      </div>
    );
  }
}

PostListItem.defaultProps = {
  showKeyComments: true,
};

PostListItem.propTypes = {
  article: object.isRequired,
};