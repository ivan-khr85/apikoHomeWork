import React, { Component } from "react";
import PostListItem from "./PostListItem";
import MoreButton from "./MoreButton";
import { array } from "prop-types";


export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countPost: 10,
    };
    this.getMorePost = this.getMorePost.bind(this);

  }

  getMorePost() {
    this.setState({
      countPost: this.state.countPost + 10
    });
  }

  render() {
    const { post } = this.props;
    const { countPost } = this.state;

    return post.map((postItem, index) => {
      if (index > countPost) return;

      if (index < countPost) {
        return (
          <PostListItem
            article={postItem}
            key={postItem.id}
            showKeyComments={true} />
        );
      }

      return (
        <MoreButton
          clickMorePost={this.getMorePost}
          key={postItem.id + index} />
      );
    });
  }
}

PostList.propTypes = {
  post: array.isRequired,
};