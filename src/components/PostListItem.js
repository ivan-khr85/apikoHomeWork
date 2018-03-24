import React, { Component } from 'react'
import '../style/postListItem.css'


export default class PostListItem extends Component {

  render() {
    const { article } = this.props;

    return (
      <div>
        <div className='articleTitle'>{article.title}</div>
        <div className='articleBody'>{article.body}</div>
      </div>
    )
  }
}
