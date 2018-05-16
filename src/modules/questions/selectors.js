import { createSelector } from 'reselect';
import R from 'ramda';

export const getQuestionListLoadingState = createSelector(
  R.path(['question', 'isQuestionListLoading']),
  state => state,
);

export const getQuestionListErrorState = createSelector(
  R.path(['question', 'isQuestionListLoadingError']),
  state => state,
);

export const getQuestionListLoadingMoreState = createSelector(
  R.path(['question', 'isQuestionListLoadingMore']),
  state => state,
);

export const getQuestionListLoadingMoreErrorState = createSelector(
  R.path(['question', 'isQuestionListLoadingMoreError']),
  state => state,
);

export const getQuestionList = createSelector(
  state => [
    R.path(['question', 'isQuestionListLoading'], state),
    R.path(['question', 'isQuestionListLoading'], state),
  ],
  (ids, entities) => ids.map(item => entities[item]),
);

export const getQuestionListCount = createSelector(
  R.path(['question', 'isQuestionListLoading']),
  ids => ids.length,
);

export const getQuestionListHasNoMoreState = createSelector(
  R.path(['question', 'isQuestionListHasNoMore']),
  state => state,
);
