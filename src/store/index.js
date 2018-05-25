import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
import reducers from '../modules';

let store = null; // eslint-disable-line

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['search'],
};

const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);
export const addNavigationListener = createReduxBoundAddListener('root');

if (__DEV__) { // eslint-disable-line
  const devToolsEnhancer = require('remote-redux-devtools'); // eslint-disable-line
  store = createStore(
    persistReducer(persistConfig, combineReducers(reducers)),
    {},
    compose(
      applyMiddleware(navigationMiddleware, thunk),
      devToolsEnhancer.default({
        realtime: true,
        hostname: '192.168.0.103',
        port: 8000,
        suppressConnectErrors: false,
      }),
    ),
  );
} else {
  store = createStore(
    persistReducer(persistConfig, combineReducers(reducers)),
    {},
    applyMiddleware(navigationMiddleware, thunk),
  );
}

persistStore(store);

export default store;
