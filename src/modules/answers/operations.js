import * as actions from './actions';
import * as answersSelectors from './selectors';
import Api from '../../api';
import normalize from '../../utils/normalize';


export const getAnswersByQuestionId = id => async (dispatch) => {
  try {
    dispatch(actions.getAnswersByQuestionIdStart());
    dispatch(actions.setCountAnswers(0));
    
    const res = await Api.getAnswersByQuestionId({ id });
    const payload = normalize(res.data.questions);
    
    dispatch(actions.setCountAnswers(res.data.count));
    
    dispatch(actions.getAnswersByQuestionIdSuccess({ ...payload, id }));
  } catch (err) {
    dispatch(actions.getAnswersByQuestionIdError());
  }
};

export const getAnswersByQuestionIdMore = id => async (dispatch, getState) => {
  try {
    dispatch(actions.getAnswersByQuestionIdMoreStart());
    
    const count = answersSelectors.getAnswersByQuestionId(getState(), id).length;
    const res = await Api.getAnswersByQuestionId({ id, skip: count });
    
    if (res.data.count === count) {
      dispatch(actions.answersHesNoMore());
    }
    dispatch(actions.setCountAnswers(res.data.count));
    const payload = normalize(res.data.questions);
    
    dispatch(actions.getAnswersByQuestionIdMoreSuccess({ ...payload, id }));
  } catch (err) {
    dispatch(actions.getAnswersByQuestionIdMoreError());
  }
};
