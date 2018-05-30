import R from 'ramda';
import { handleActions } from 'redux-actions';
import * as types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  searchHistory: [
    // {
    //   id: '1234',
    //   createdAt: Date.now(),
    //   searchedValue: action.payload.searchedValue,
    // },
    // {
    //   ....
    // }
  ],


};

const uniqState = (prevState, nextState) =>
  R.unionWith(R.eqBy(R.prop('searchedValue')), nextState, prevState);

export default handleActions({
  
  [types.ADD_ITEM_TO_SEARCH_HISTORY]: mergeDeep((action, state) => ({
    searchHistory: uniqState(state.searchHistory, [{
      id: `${state.searchHistory.length}_${Date.now()}`,
      createdAt: Date.now(),
      searchedValue: action.payload.searchedValue,
    }]),
  })),

  [types.REMOVE_ITEM_FROM_SEARCH_HISTORY]: mergeDeep((action, state) => ({
    searchHistory: state.searchHistory.filter(item => item.id !== action.payload.id),
  })),

}, INITIAL_STATE);
