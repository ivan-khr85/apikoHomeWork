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
  [types.GET_QUESTIONS_START]: mergeDeep({
    isQuestionsListLoading: true,
    isQuestionsListError: false,
    isQuestionsListLoadingMoreError: false,
  }),
  [types.GET_QUESTIONS_SUCCESS]: mergeDeep(action => ({
    isQuestionsListLoading: false,
    questionsIds: action.payload.ids,
    questionsEntities: action.payload.entities,
  })),
  [types.GET_QUESTIONS_ERROR]: mergeDeep(action => ({
    isQuestionsListLoadingMore: false,
    isQuestionsListError: action.error,
  })),


  [types.GET_QUESTIONS_MORE_START]: mergeDeep({
    isQuestionsListLoadingMore: true,
    isQuestionsListError: false,
    isQuestionsListLoadingMoreError: false,
  }),
  [types.GET_QUESTIONS_MORE_SUCCESS]: mergeDeep((action, state) => ({
    isQuestionsListLoadingMore: false,
    questionsIds: state.questionsIds.concat(action.payload.ids),
    questionsEntities: action.payload.entities,
  })),
  [types.GET_QUESTIONS_MORE_ERROR]: mergeDeep({
    isQuestionsListLoadingMore: false,
    isQuestionsListLoadingMoreError: true,
  }),
  
  [types.QUESTIONS_LIST_HAS_NO_MORE]: mergeDeep({
    isQuestionsListHasNoMore: true,
  }),

  [types.SET_INITIAL_VALUE_TO_STATE]: mergeDeep({
    questionsIds: [],
    questionsEntities: {},
  }),
}, INITIAL_STATE);
