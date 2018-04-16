import { createStore, applyMiddleware } from 'redux';
// TODO: HOMEWORK 9: install and import thunk middleware
import { autoRehydrate, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './';

// TODO: HOMEWORK 9: apply thunk middleware
const store = createStore(reducer, undefined, composeWithDevTools(applyMiddleware(), autoRehydrate()));

persistStore(store, { whitelist: ['user'] });

export default store;
