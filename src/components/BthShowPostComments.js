import React, { Component } from "react";
import { render } from "react-dom";
import PostListItem from "./PostListItem";
import PostComments from "./PostComment";

import "../style/btnShowComments.css";
import "../style/postListItem.css";


export default class BtnShowPostComments extends Component {
  constructor(props) {
    super(props);
    this.articleWithComments = this.articleWithComments.bind(this);

  }
  articleWithComments() {
    window.scrollTo(0, 0);
    const { article, postId } = this.props;
    render(
      [<PostListItem
        article={article}
        showKeyComments={false}
        key={Math.random()} />,
      <PostComments
        postId={postId}
        key={Math.random() + Math.random} />],
      document.getElementById("root")
    );
  }

  render() {
    return (
      <div
        className="btnComments"
        onClick={this.articleWithComments}>
        OPEN COMMENTS
      </div>
    );
  }
}