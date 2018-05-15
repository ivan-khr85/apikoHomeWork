import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
import reducers from '../modules';


const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);
export const addNavigationListener = createReduxBoundAddListener('root');

const store = createStore(
  combineReducers(reducers),
  {},
  applyMiddleware(navigationMiddleware, thunk),
);

export default store;
