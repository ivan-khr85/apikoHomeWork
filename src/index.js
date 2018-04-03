import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import Err404 from './components/Err404';

import './style/customNormalizer.css';
import './style/pageErr.css';


const App = () => (
  <BrowserRouter >
    <div>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route component={Err404} />
      </Switch>
    </div>
  </BrowserRouter >
);

render(
  <App />,
  document.getElementById('root')
);