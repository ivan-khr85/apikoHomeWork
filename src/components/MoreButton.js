import React, { Component } from 'react'
import '../style/moreButton.css'

export default class MoreButton extends Component {

  render() {
    return (
      <div
        className="button"
        onClick={this.props.clickMorePost}>
        Get more post
        {/* <button
          className='button'
          type='button'
          onClick={this.buttonClick}
        > Get more post</ button> */}
      </div>
    );
  }
}