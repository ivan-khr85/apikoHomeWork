import { createSelector } from 'reselect';
import R from 'ramda';

export const getSigningUpState = createSelector(
  R.pathOr(0, ['auth', 'isSigningUp']),
  state => state,
);
export const getSignedInState = createSelector(
  R.pathOr(0, ['auth', 'signedIn']),
  state => state,
);
export const getSignUpErrorState = createSelector(
  R.pathOr(0, ['auth', 'SignUpError']),
  state => state,
);


export const getSigningInState = createSelector(
  R.pathOr(0, ['auth', 'isSigningIn']),
  state => state,
);
export const getSignInErrorState = createSelector(
  R.pathOr(0, ['auth', 'isSignInError']),
  state => state,
);


export const getSigningOutState = createSelector(
  R.pathOr(0, ['auth', 'isSigningOut']),
  state => state,
);
