import { createSelector } from 'reselect';
import R from 'ramda';

const getQuestionsIds = state => R.pathOr([], ['search', 'questionsIds'], state);
const getQuestionsEntities = state => R.pathOr({}, ['search', 'questionsEntities'], state);

export const getQuestionsListLoadingState = createSelector(
  R.path(['search', 'isQuestionsListLoading']),
  state => state,
);

export const getQuestionsListErrorState = createSelector(
  R.path(['search', 'isQuestionsListError']),
  state => state,
);

export const getQuestionsListLoadingMoreState = createSelector(
  R.path(['search', 'isQuestionsListLoadingMore']),
  state => state,
);

export const getQuestionsListLoadingMoreErrorState = createSelector(
  R.path(['search', 'isQuestionsListLoadingMoreError']),
  state => state,
);

export const getQuestionsList = createSelector(
  [getQuestionsIds, getQuestionsEntities],
  (ids, entities) => ids.map(item => entities[item]),
);

export const getQuestionsListCount = createSelector(
  R.path(['search', 'questionsIds']),
  ids => ids.length,
);

export const getQuestionsListHasNoMoreState = createSelector(
  R.path(['search', 'isQuestionsListHasNoMore']),
  state => state,
);

export const getQuestionById = createSelector(
  (state, id) => R.pathOr({}, ['search', 'questionsEntities', id])(state),
  state => state,
);
