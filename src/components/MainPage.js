import React, { Component, Fragment } from 'react';
import SearchPosts from './SeachPosts';
import articles from '../data/articles';
import comments from '../data/comments';
import PostList from './PostList';
import filterPostsByTitle from '../method/filterPostsByTitle';
import NoItemFound from './NoItemFound';


export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: '',
    };
    this.handleFindChange = this.handleFindChange.bind(this);
  }

  handleFindChange({ target }) {
    clearTimeout(this.TimerID);
    this.TimerID = setTimeout(() => {
      if (this.state.searched !== target.value) {
        this.setState({
          searched: target.value,
        });
      }
    }, 600);
  }

  render() {
    const { searched } = this.state;
    const posts = filterPostsByTitle(articles, searched);

    return (
      <Fragment>
        <SearchPosts handleFindChange={this.handleFindChange} />
        <PostList
          posts={posts}
          comments={comments} />

        {!posts.length && <NoItemFound />}

      </Fragment >
    );
  }
}
