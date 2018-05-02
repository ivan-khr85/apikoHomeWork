import { createSelector } from 'reselect';
import R from 'ramda';


export const getCountValue = createSelector(
  R.pathOr({}, ['countValue']),
  count => count,
);
