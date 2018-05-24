import { handleActions } from 'redux-actions';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from 'redux-persist/lib/storage';
import * as types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  
};

const searchReducer = handleActions({


}, INITIAL_STATE);

const config = {
  key: 'search',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

export default persistReducer(config, searchReducer);
