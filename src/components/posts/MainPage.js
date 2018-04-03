import React, { Component, Fragment } from 'react';
import SearchPosts from './SearchPosts/index';
import NoItemFound from './NoItemFound';
import PostList from './PostList';
import filterPostsByTitle from '../../method/filterPostsByTitle';
import fetchData from '../../method/fetchData';

import '../../style/isLoading.css';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: [],
      isLoading: true,
      searched: '',
    };

    this.handleFindChange = this.handleFindChange.bind(this);
  }

  componentDidMount() {
    this.TimeID = setInterval(() => {
      Promise.all([fetchData('posts'), fetchData('comments')])
        .then(([posts, comments]) => {
          this.setState({
            posts,
            comments,
            isLoading: false,
          });
        });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.TimeID);
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
    const { posts, comments, isLoading, searched } = this.state;
    const filteredPosts = filterPostsByTitle(posts, searched);

    return (
      <Fragment>
        <SearchPosts handleFindChange={this.handleFindChange} />
        {!isLoading && <PostList
          posts={filteredPosts}
          comments={comments} />}
        {isLoading && <div className="isLoading">Loading...</div>}

        {!filteredPosts.length && !isLoading && <NoItemFound />}
      </Fragment>
    );
  }
}
