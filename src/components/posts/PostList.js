import React, { Component, Fragment } from 'react';
import PostListItem from './PostListItem/index';
import MoreButton from './MoreButton';
import { array } from 'prop-types';


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
      countPost: this.state.countPost + 10,
    });
  }


  render() {
    const { posts, comments } = this.props;
    const { countPost } = this.state;

    return posts
      .filter((item, i) => i < countPost)
      .map((postItem, index) => {
        return (
          < Fragment key={postItem.id} >
            <PostListItem
              article={postItem}
              key={postItem.id}
              showKeyComments={true}
              comments={comments} />

            {
              index === countPost - 1 &&
              <MoreButton getMorePost={this.getMorePost} key={postItem.id + index} />
            }
          </Fragment >
        );
      });

  }
}


PostList.propTypes = {
  posts: array.isRequired,
  comments: array.isRequired,
};