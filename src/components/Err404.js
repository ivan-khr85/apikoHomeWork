import React from 'react';
import '../style/pageErr.css';

const Err404 = () => {
  const pathname = window.location.pathname;
  return (
    <div className="pageErr">
      <div><b>404</b></div>
      <div>
        <small>Sorry, page <b>{pathname}</b> is not found</small>
      </div>
    </div>
  );
};
export default Err404;