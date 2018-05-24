import * as actions from './actions';
import Api from '../../api';
import { searchSelectors } from './';
import normalize from '../../utils/normalize';


export const getQuestions = search => async (dispatch, getState) => {
  try {
    const isFetching = searchSelectors.getQuestionsListLoadingState(getState());
    if (isFetching) {
      return;
    }
    
    dispatch(actions.getQuestionsStart());

    const res = await Api.getQuestions({ search });
    const payload = normalize(res.data.questions);
    
    dispatch(actions.getQuestionsSuccess(payload));
  } catch (err) {
    dispatch(actions.getQuestionsError());
  }
};


export const getQuestionsMore = search => async (dispatch, getState) => {
  try {
    const isFetchingMore = searchSelectors.getQuestionsListLoadingMoreState(getState());
    const isFetching = searchSelectors.getQuestionsListLoadingState(getState());
    
    if (isFetchingMore || isFetching) {
      return;
    }
    
    
    dispatch(actions.getQuestionsMoreStart());
    
    const count = searchSelectors.getQuestionsListCount(getState());
    const res = await Api.getQuestions({ skip: count, search });

    if (res.data.count === count) {
      dispatch(actions.questionListHesNoMore());
    }
    const payload = normalize(res.data.questions);
    
    dispatch(actions.getQuestionsMoreSuccess(payload));
  } catch (err) {
    dispatch(actions.getQuestionsMoreError());
  }
};

export const clearState = () => async (dispatch) => {
  dispatch(actions.setInitialValueToState());
};
