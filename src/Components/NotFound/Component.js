import React from 'react';
import { withRouter } from 'react-router';


const NotFound = ({ location }) => (
  <div>
    <h1>404</h1>
    <div>Sorry, page <strong>{location.pathname}</strong> was not found!</div>
  </div>
);


export default withRouter(NotFound);
