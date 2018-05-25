import { AsyncStorage } from 'react-native';
import * as actions from './actions';
import { searchSelectors } from './';


export const setItemToHistory = searchedValue => async (dispatch) => {
  dispatch(actions.addItemToSearchHistory({ searchedValue }));
};


export const removeItemFromHistory = id => async (dispatch) => {
  dispatch(actions.removeItemToSearchHistory({ id }));
};
