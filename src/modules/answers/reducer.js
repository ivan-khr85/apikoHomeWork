import { handleActions } from 'redux-actions';
import * as types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  countAnswers: 0,

  isAnswersLoading: false,
  isAnswersError: null,

  isAnswersLoadingMore: false,
  isAnswersLoadingMoreError: null,

  isAnswersHasNoMore: false,

  answersIds: {
    // [questionId]: [],
  },
  answersEntities: {},
};

export default handleActions({
  [types.GET_ANSWERS_BY_QUESTION_ID_START]: mergeDeep({
    isAnswersLoading: true,
    isAnswersError: false,
    isAnswersLoadingMoreError: false,
  }),
  [types.GET_ANSWERS_BY_QUESTION_ID_SUCCESS]: mergeDeep(action => ({
    isAnswersLoading: false,
    answersIds: {
      [action.payload.id]: action.payload.ids,
    },
    answersEntities: action.payload.entities,
  })),
  [types.GET_ANSWERS_BY_QUESTION_ID_ERROR]: mergeDeep(action => ({
    isAnswersLoadingMore: false,
    isAnswersError: action.error,
  })),


  [types.GET_ANSWERS_BY_QUESTION_ID_MORE_START]: mergeDeep({
    isAnswersLoadingMore: true,
    isAnswersError: false,
    isAnswersLoadingMoreError: false,
  }),
  
  [types.GET_ANSWERS_BY_QUESTION_ID_MORE_SUCCESS]: mergeDeep((action, state) => ({
    isAnswersLoadingMore: false,
    answersIds: {
      [action.payload.id]: state.answersIds[action.payload.id].concat(action.payload.ids),
    },

    // answersEntities: state.answersEntities.concat(action.payload.entities),
    answersEntities: Object.assign(state.answersEntities, action.payload.entities),
    
  })),

  [types.GET_ANSWERS_BY_QUESTION_ID_MORE_ERROR]: mergeDeep({
    isAnswersLoadingMore: false,
    isAnswersLoadingMoreError: true,
  }),
  
  [types.ANSWERS_BY_QUESTION_ID_HAS_NO_MORE]: mergeDeep({
    isAnswersHasNoMore: true,
  }),

  [types.COUNT_ANSWERS]: mergeDeep(action => ({
    countAnswers: action.payload,
  })),

}, INITIAL_STATE);
