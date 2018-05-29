import { handleActions } from 'redux-actions';
import * as types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  isCreatingQuestion: false,
  isCreateQuestionError: false,

};

export default handleActions({
  [types.CREATE_QUESTION_START]: mergeDeep({
    isCreatingQuestion: true,
    isCreateQuestionError: false,
  }),
  [types.CREATE_QUESTION_SUCCESS]: mergeDeep({
    isCreatingQuestion: false,
  }),
  [types.CREATE_QUESTION_ERROR]: mergeDeep(action => ({
    isCreatingQuestion: false,
    isCreateQuestionError: action.payload.error,
    // isCreateQuestionError: true,
  })),


}, INITIAL_STATE);
