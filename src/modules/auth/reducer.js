import { handleActions } from 'redux-actions';
import * as types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  signedIn: false,
  isSigningUp: false,
  isSignUpError: null,

  isSigningIn: false,
  isSignInError: null,

  isSigningOut: false,
};

export default handleActions({
  [types.SIGN_UP_START]: mergeDeep({ isSigningUp: true }),
  [types.SIGN_UP_SUCCESS]: mergeDeep({ isSigningUp: false, signedIn: true }),
  [types.SIGN_UP_ERROR]: mergeDeep(action => ({
    isSigningUp: false,
    isSignUpError: action.error,
  })),


  [types.SIGN_IN_START]: mergeDeep({ isSigningIn: true }),
  [types.SIGN_IN_SUCCESS]: mergeDeep({ isSigningIn: false, signedIn: true }),
  [types.SIGN_IN_ERROR]: mergeDeep(action => ({
    isSigningIn: false,
    isSignInError: action.error,
  })),


  [types.SIGN_OUT_START]: mergeDeep({ isSigningOut: true }),
  [types.SIGN_OUT_SUCCESS]: mergeDeep({ isSigningOut: false, signedIn: false }),

}, INITIAL_STATE);
