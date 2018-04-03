import React, { Component } from 'react';
import { func } from 'prop-types';

import '../style/searchForm.css';

export default class SearchPosts extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { handleFindChange } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="searchForm">
        <input
          type="text"
          placeholder="Search..."
          autoFocus
          onChange={handleFindChange} />
      </form >
    );
  }
}

SearchPosts.propTypes = {
  handleFindChange: func.isRequired,
};