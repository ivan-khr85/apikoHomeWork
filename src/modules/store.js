import { createStore } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './';

const store = createStore(reducer, undefined, composeWithDevTools(autoRehydrate()));

persistStore(store, { whitelist: ['user'] });



export default store;
