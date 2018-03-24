import React, { Component } from 'react'
import PostListItem from './PostListItem';
import MoreButton from './MoreButton';
import '../style/postList.css'


export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countPost: 10,
    }
    this.getMorePost = this.getMorePost.bind(this);
  }


  getMorePost() {
    this.setState({
      countPost: this.state.countPost + 10
    })
  }

  render() {

    const { post } = this.props;
    const { countPost } = this.state;

    const articles = post.map((postItem, index) => {
      if (index > countPost) return;


      if (index < countPost) {
        return (
          <div key={postItem.id} className='article'>
            <PostListItem article={postItem} coutPost={this.state.coutPost} />
          </div>
        )
      }
      return (
        <MoreButton clickMorePost={this.getMorePost} />
      );

    });
    return articles;
  }
}