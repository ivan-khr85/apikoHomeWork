import * as actions from './actions';
import Api from '../../api';
import { questionsSelectors } from './';
import normalize from '../../utils/normalize';

export const getQuestions = () => async (dispatch, getState) => {
  try {
    const isFetching = questionsSelectors.getQuestionsListLoadingState(getState());
    if (isFetching) {
      return;
    }
    
    dispatch(actions.getQuestionsStart());
    
    const res = await Api.getQuestions();
    const payload = normalize(res.data.questions);
    
    dispatch(actions.getQuestionsSuccess(payload));
  } catch (err) {
    dispatch(actions.getQuestionsError());
  }
};


export const getQuestionsMore = () => async (dispatch, getState) => {
  try {
    const isFetchingMore = questionsSelectors.getQuestionsListLoadingMoreState(getState());
    const isFetching = questionsSelectors.getQuestionsListLoadingState(getState());
    
    if (isFetchingMore || isFetching) {
      return;
    }
    
    const count = questionsSelectors.getQuestionsListCount;
    
    dispatch(actions.getQuestionsMoreStart());

    const res = await Api.getQuestions({ skip: count });

    const payload = normalize(res.data);

    dispatch(actions.getQuestionsMoreSuccess(payload));
  } catch (err) {
    dispatch(actions.getQuestionsMoreError());
  }
};

