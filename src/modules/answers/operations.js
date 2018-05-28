import * as actions from './actions';
import * as answersSelectors from './selectors';
import Api from '../../api';
import normalize from '../../utils/normalize';


export const getAnswersByQuestionId = id => async (dispatch, getState) => {
  try {
    const isFetching = answersSelectors.getAnswersLoadingState(getState());
    if (isFetching) {
      return;
    }

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
    const isFetching = answersSelectors.getAnswersLoadingState(getState());    
    const isFetchingMore = answersSelectors.getAnswersLoadingMoreState(getState());
    if (isFetchingMore || isFetching) {
      return;
    }
    
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


export const publishAnswer = ({ description, questionId }) => async (dispatch) => {
  try {
    dispatch(actions.publishingAnswerStart());
    
    const res = await Api.publishAnswer({ description, questionId }); // eslint-disable-line

    dispatch(actions.publishingAnswerSuccess());
  } catch (err) {
    dispatch(actions.publishingAnswerError());
    throw new Error('publish Error');
  }
};
