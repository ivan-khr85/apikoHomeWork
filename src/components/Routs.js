import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './posts/MainPage';
import Err404 from './Err404';
import Sidebar from './sidebar/index';


const Routs = () => (

  <BrowserRouter >
    <Fragment>

      <Sidebar />

      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route component={Err404} />
      </Switch>

    </Fragment>
  </BrowserRouter >
);

export default Routs;