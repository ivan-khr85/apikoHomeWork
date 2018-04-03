import React from 'react';
import '../style/pageErr.css';


const Err404 = () => {
  const pathname = window.location.pathname;
  return (
    <div className="pageErr">
      <div>Error 404</div>
      <div>page {pathname} is not found</div>
    </div>
  );
};
export default Err404;