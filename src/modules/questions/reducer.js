import { handleActions } from 'redux-actions';
import * as types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  isQuestionsListLoading: false,
  isQuestionsListError: null,
  isQuestionsListLoadingMore: false,
  isQuestionListLoadingMoreError: null,

  questionsIds: [],
  questionsEntities: {},
};

export default handleActions({
  [types.GET_QUESTIONS_START]: mergeDeep({ isQuestionsListLoadingMore: true }),
  [types.GET_QUESTIONS_SUCCESS]: mergeDeep(action => ({
    isQuestionsListLoadingMore: false,
    questionsIds: action.payload.ids,
    questionsEntities: action.payload.entities,
  })),
  [types.GET_QUESTIONS_ERROR]: mergeDeep(action => ({
    isQuestionsListLoadingMore: false,
    isQuestionsListLoadingError: action.payload.error,
  })),


  [types.GET_QUESTIONS_MORE_START]: mergeDeep({ isQuestionsListLoadingMore: true }),
  [types.GET_QUESTIONS_MORE_SUCCESS]: mergeDeep((action, state) => ({
    isQuestionsListLoadingMore: false,
    questionsIds: state.questionsIds.cuncat(action.payload.ids),
    questionsEntities: action.payload.entities,
  })),
  [types.GET_QUESTIONS_MORE_ERROR]: mergeDeep(action => ({
    isQuestionsListLoadingMore: false,
    isQuestionsListLoadingError: action.payload.error,
  })),
}, INITIAL_STATE);
