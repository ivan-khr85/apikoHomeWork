import React, { Component } from "react";
import "../style/postListItem.css";
import BtnShowPostComments from "./BthShowPostComments";
import T from "prop-types";

export default class PostListItem extends Component {

  render() {
    const { article, showKeyComments } = this.props;
    if (showKeyComments) {
      return (
        <div className="article">
          <div className="articleTitle">{article.title}</div>
          <hr />
          <div className="articleBody">{article.body}</div>
          <BtnShowPostComments postId={article.id} article={article} />
        </div>
      );
    }

    return (
      <div className="article">
        <div className="articleTitle">{article.title}</div>
        <hr />
        <div className="articleBody">{article.body}</div>
      </div>
    );
  }
}

PostListItem.defaultProps = {
  showKeyComments: true,
};

PostListItem.T = {
  article: T.object.isRequired,
};