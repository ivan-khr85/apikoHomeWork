import * as actions from './actions';
import Api from '../../api';
import { searchSelectors } from './';
import normalize from '../../utils/normalize';


export const getQuestions = search => async (dispatch, getState) => {
  try {

    
    dispatch(actions.getQuestionsStart());


    dispatch(actions.getQuestionsSuccess());
  } catch (err) {
    dispatch(actions.getQuestionsError());
  }
};

