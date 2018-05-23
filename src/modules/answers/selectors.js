import { createSelector } from 'reselect';
import R from 'ramda';

const getAnswersEntities = state => R.pathOr({}, ['answers', 'answersEntities'], state);


export const getAnswersLoadingState = createSelector(
  R.path(['answers', 'isAnswersLoading']),
  state => state,
);

export const getAnswersErrorState = createSelector(
  R.path(['answers', 'isAnswersError']),
  state => state,
);

export const getAnswersLoadingMoreState = createSelector(
  R.path(['answers', 'isAnswersLoadingMore']),
  state => state,
);

export const getAnswersLoadingMoreErrorState = createSelector(
  R.path(['answers', 'isAnswersLoadingMoreError']),
  state => state,
);


export const getAnswersHasNoMoreState = createSelector(
  R.path(['answers', 'isAnswersHasNoMore']),
  state => state,
);


export const getAnswerIdsByQuestionId = createSelector(
  (state, id) => R.pathOr([], ['answers', 'answersIds', id], state),
  state => state,
);


export const getAnswersByQuestionId = createSelector(
  [
    getAnswerIdsByQuestionId,
    getAnswersEntities,
  ],
  (ids, entities) => ids.map(item => entities[item]),
);


export const getAnswersCount = createSelector(
  R.path(['answers', 'countAnswers']),
  state => state,
);

export const getPublishAnswerState = createSelector(
  R.path(['answers', 'isAnswerPublishing']),
  state => state,
);

export const getPublishAnswerErrorState = createSelector(
  R.path(['answers', 'isAnswerPublishingError']),
  state => state,
);
