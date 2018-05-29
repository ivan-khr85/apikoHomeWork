import { createAction } from 'redux-actions';
import * as types from './types';

export const getUserInfoStart = createAction(types.GET_USER_INFO_START);
export const getUserInfoSuccess = createAction(types.GET_USER_INFO_SUCCESS);
export const getUserInfoError = createAction(types.GET_USER_INFO_ERROR);
