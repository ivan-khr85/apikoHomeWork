import React, { Component } from 'react'
import '../style/moreButton.css'

export default class MoreButton extends Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }


  buttonClick(e) {
    this.props.clickMorePost(e)
  }


  render() {


    return (
      <div
        className='button'
        onClick={this.buttonClick}>
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