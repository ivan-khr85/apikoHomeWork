import { createSelector } from 'reselect';
import R from 'ramda';

export const getSearchHistory = createSelector(
  R.path(['search', 'searchHistory']),
  state => state,
);
