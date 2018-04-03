import React from 'react';
import { render } from 'react-dom';
import Routs from './components/Routs';

import './style/customNormalizer.css';


const App = () => {
  return (
    <Routs />
  );
};


render(
  <App />,
  document.getElementById('root')
);