import { AsyncStorage } from 'react-native';
import * as actions from './actions';
import { searchSelectors } from './';
import normalize from '../../utils/normalize';


export const setItemToHistory = searchedValue => async (dispatch) => {
  dispatch(actions.addItemToSearchHistory({ searchedValue }));
};


export const removeItemFromHistory = searchedValue => async (dispatch) => {
  dispatch(actions.removeItemToSearchHistory());
};
