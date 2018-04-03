import React from 'react';
import { func } from 'prop-types';
import '../style/moreButton.css';

const MoreButton = ({ getMorePost }) => (
  <button
    onClick={getMorePost}
    className="button">
    Get more post
  </button>
);
export default MoreButton;

MoreButton.propTypes = {
  getMorePost: func.isRequired,
};