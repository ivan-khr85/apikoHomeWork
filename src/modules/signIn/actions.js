import { createAction } from 'redux-actions';
import * as types from './types';


export const signInStart = createAction(types.SIGN_IN_START);
export const signInSuccess = createAction(types.SIGN_IN_SUCCESS);
export const signInError = createAction(types.SIGN_IN_ERROR);
