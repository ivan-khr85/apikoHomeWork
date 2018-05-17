import { createSelector } from 'reselect';
import R from 'ramda';

const getQuestionsIds = state => R.pathOr([], ['questions', 'questionsIds'], state);
const getQuestionsEntities = state => R.pathOr({}, ['questions', 'questionsEntities'], state);

export const getQuestionsListLoadingState = createSelector(
  R.path(['questions', 'isQuestionsListLoading']),
  state => state,
);

export const getQuestionsListErrorState = createSelector(
  R.path(['questions', 'isQuestionsListLoadingError']),
  state => state,
);

export const getQuestionsListLoadingMoreState = createSelector(
  R.path(['questions', 'isQuestionsListLoadingMore']),
  state => state,
);

export const getQuestionsListLoadingMoreErrorState = createSelector(
  R.path(['questions', 'isQuestionsListLoadingMoreError']),
  state => state,
);

export const getQuestionsList = createSelector(
  [getQuestionsIds, getQuestionsEntities],
  (ids, entities) => ids.map(item => entities[item]),
);

export const getQuestionsListCount = createSelector(
  R.path(['questions', 'questionsIds']),
  ids => ids.length,
);

export const getQuestionsListHasNoMoreState = createSelector(
  R.path(['questions', 'isQuestionsListHasNoMore']),
  state => state,
);
