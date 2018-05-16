import * as actions from './actions';
import Api from '../../api';


export const getQuestions = () => async (dispatch) => {
  try {
    dispatch(actions.getQuestionsStart());

    const res = await Api.getQuestions();


    dispatch(actions.getQuestionsSuccess());
  } catch (err) {
    dispatch(actions.getQuestionsError());
    throw new Error('Get questions error');
  }
};


export const getQuestionsMore = () => async (dispatch, getState) => {
  try {
    const { questionsIds } = getState().questions;
    dispatch(actions.getQuestionsMoreStart());

    const res = await Api.getQuestions({ skip: questionsIds.length });


    dispatch(actions.getQuestionsMoreSuccess());
  } catch (err) {
    dispatch(actions.getQuestionsMoreError());
    throw new Error('Get questions error');
  }
};

