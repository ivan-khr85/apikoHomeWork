import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../modules';


const store = createStore(
  combineReducers(reducers),
  {},
  applyMiddleware(thunk),
);

export default store;
