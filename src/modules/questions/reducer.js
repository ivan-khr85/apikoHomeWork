import { handleActions } from 'redux-actions';
import * as types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  isQuestionsListLoading: false,
  isQuestionsListError: null,
  isQuestionsListLoadingMore: false,
  isQuestionsListLoadingMoreError: null,

  isQuestionsListHasNoMore: false,

  questionsIds: [],
  questionsEntities: {},
};

export default handleActions({
  [types.GET_QUESTIONS_START]: mergeDeep({ isQuestionsListLoading: true }),
  [types.GET_QUESTIONS_SUCCESS]: mergeDeep(action => ({
    isQuestionsListLoading: false,
    questionsIds: action.payload.ids,
    questionsEntities: action.payload.entities,
  })),
  [types.GET_QUESTIONS_ERROR]: mergeDeep(action => ({
    isQuestionsListLoadingMore: false,
    isQuestionsListLoadingError: action.error,
  })),


  [types.GET_QUESTIONS_MORE_START]: mergeDeep({ isQuestionsListLoadingMore: true }),
  [types.GET_QUESTIONS_MORE_SUCCESS]: mergeDeep((action, state) => ({
    isQuestionsListLoadingMore: false,
    questionsIds: state.questionsIds.concat(action.payload.ids),
    questionsEntities: action.payload.entities,
  })),
  [types.GET_QUESTIONS_MORE_ERROR]: mergeDeep(action => ({
    isQuestionsListLoadingMore: false,
    isQuestionsListLoadingError: action.error,
  })),
  [types.QUESTIONS_MORE_ERROR]: mergeDeep(action => ({
    isQuestionsListHasNoMore: action.error,
  })),
}, INITIAL_STATE);
