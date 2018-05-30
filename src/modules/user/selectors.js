import { createSelector } from 'reselect';
import R from 'ramda';

export const getGettingInfoState = createSelector(
  R.pathOr(false, ['user', 'isGettingInfo']),
  state => state,
);
export const getGettingInfoErrorState = createSelector(
  R.pathOr(false, ['user', 'isGettingInfoError']),
  state => state,
);

export const getUserEmailState = createSelector(
  R.pathOr('email@example.com', ['user', 'userInfo', 'email']),
  state => state,
);

export const getUsernameState = createSelector(
  R.pathOr('username', ['user', 'userInfo', 'profile', 'fullName']),
  state => state,
);

export const getUserQuestionsState = createSelector(
  R.pathOr([], ['user', 'userQuestions']),
  state => state,
);
