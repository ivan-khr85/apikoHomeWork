import { handleActions } from 'redux-actions';
import * as types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  isGettingInfo: false,
  isGettingInfoError: null,

  userInfo: {},
  userQuestions: [],
};

export default handleActions({
  [types.GET_USER_INFO_START]: mergeDeep({ isGettingInfo: true }),

  [types.GET_USER_INFO_SUCCESS]: mergeDeep(action => ({
    isGettingInfo: false,
    userInfo: action.payload.user.user,
    userQuestions: action.payload.user.questions,
  })),
  
  [types.GET_USER_INFO_ERROR]: mergeDeep(action => ({
    isGettingInfo: false,
    isGettingInfoError: action.error,
  })),

}, INITIAL_STATE);
