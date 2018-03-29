import React from "react";
import "../style/moreButton.css";


const MoreButton = ({ clickMorePost }) => (
  <button
    onClick={clickMorePost}
    className="button">
    Get more post
  </button>
);

export default MoreButton;