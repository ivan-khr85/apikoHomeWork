import * as actions from './actions';
import Api from '../../api';

export const createQuestion = (title, description, tags) => async (dispatch) => {
  try {
    dispatch(actions.createQuestionStart());

    await Api.createQuestion(title, description, tags);
    dispatch(actions.createQuestionSuccess());
  } catch (err) {
    dispatch(actions.createQuestionError());
    throw new Error('publish answer Error');
  }
};
