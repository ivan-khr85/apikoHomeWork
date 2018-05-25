import { AsyncStorage } from 'react-native';
import * as actions from './actions';
import { searchSelectors } from './';
import normalize from '../../utils/normalize';


export const setItemToHistory = search => async (dispatch, getState) => {
  try {

    dispatch(actions.getQuestionsStart());


    dispatch(actions.getQuestionsSuccess());
  } catch (err) {
    dispatch(actions.getQuestionsError());
  }
};

export const removeItemFromHistory = search => async (dispatch, getState) => {
  try {

    dispatch(actions.getQuestionsStart());


    dispatch(actions.getQuestionsSuccess());
  } catch (err) {
    dispatch(actions.getQuestionsError());
  }
};