import { createAction } from 'redux-actions';
import * as types from './types';

export const signUpStart = createAction(types.SIGN_UP_START);
export const signUpSuccess = createAction(types.SIGN_UP_SUCCESS);
export const signUpError = createAction(types.SIGN_UP_ERROR);


export const signInStart = createAction(types.SIGN_IN_START);
export const signInSuccess = createAction(types.SIGN_IN_SUCCESS);
export const signInError = createAction(types.SIGN_IN_ERROR);


export const signOutStart = createAction(types.SIGN_OUT_START);
export const signOutSuccess = createAction(types.SIGN_OUT_SUCCESS);
export const signOutError = createAction(types.SIGN_OUT_ERROR);

