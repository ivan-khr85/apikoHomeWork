import React from 'react';
import { func } from 'prop-types';

import '../../../style/searchForm.css';

const SearchPosts = ({ handleFindChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="searchForm">
    <input
      className='inputSearchPost'
      type="text"
      placeholder="Search..."
      autoFocus
      onChange={handleFindChange} />
  </form >
);
export default SearchPosts;

SearchPosts.propTypes = {
  handleFindChange: func.isRequired,
  onSubmit: func.isRequired,
};