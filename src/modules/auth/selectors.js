import { createSelector } from 'reselect';
import R from 'ramda';

export const getSigningUpState = createSelector(
  R.pathOr(0, ['auth', 'isSigningUp']),
  state => state,
);
