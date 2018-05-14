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
