import React, { Component, Fragment } from 'react';
import { object, bool, array } from 'prop-types';
import Comments from './Comments';

import '../style/postListItem.css';
import '../style/btnShowComments.css';
import getCommentsById from '../method/getCommentsById';



export default class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false,
    };
    this.toggleShowComments = this.toggleShowComments.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { article: nowArticle } = this.props;
    const { article: nextArticle } = nextProps;
    return (
      nowArticle.title !== nextArticle.title ||
      nowArticle.body !== nextArticle.body ||
      this.state !== nextState
    );
  }

  toggleShowComments() {
    this.setState({
      showComments: !this.state.showComments,
    });
  }

  render() {
    const { article, comments } = this.props;
    const { showComments } = this.state;
    const commentsToThisPost = getCommentsById(comments, article.id);

    return (
      <Fragment>
        <div className="article">
          <div className="articleTitle">{article.title}</div>
          <hr />
          <div className="articleBody">{article.body}</div>

          {showComments &&
            <div className="comments">
              <div className="titleComm">Comments:</div>
              <hr />
              {showComments && <Comments comments={commentsToThisPost} />}
            </div>
          }

          {commentsToThisPost.length &&
            <button
              className='btnComments'
              onClick={this.toggleShowComments}>
              {showComments ? 'Hide comments' : 'Show comments'}
            </button>
          }
        </div>

      </Fragment >
    );
  }
}

PostListItem.defaultProps = {
  showKeyComments: true,
};

PostListItem.propTypes = {
  article: object.isRequired,
  comments: array.isRequired,
  showKeyComments: bool,
};
