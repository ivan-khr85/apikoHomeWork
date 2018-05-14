import { handleActions } from 'redux-actions';
import * as types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  signedIn: false,
  isSigningIn: false,
  isSignInError: null,
};

export default handleActions({
  [types.SIGN_IN_START]: mergeDeep({ isSigningIn: true }),
  [types.SIGN_IN_SUCCESS]: mergeDeep({ isSigningIn: false, signedIn: true }),
  [types.SIGN_IN_ERROR]: mergeDeep(action => ({ isSigningIn: false, isSignInError: action.payload })),
}, INITIAL_STATE);
