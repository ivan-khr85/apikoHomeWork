import { createSelector } from 'reselect';
import R from 'ramda';

export const getSigningInState = createSelector(
  R.pathOr(0, ['signIn', 'isSigningIn']),
  state => state,
);

export const getSignedInState = createSelector(
  R.pathOr(0, ['signIn', 'signedIn']),
  state => state,
);

export const getSignInErrorState = createSelector(
  R.pathOr(0, ['signIn', 'isSignInError']),
  state => state,
);
