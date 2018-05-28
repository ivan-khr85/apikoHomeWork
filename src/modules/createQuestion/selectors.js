import { createSelector } from 'reselect';
import R from 'ramda';


export const getCreationQuestionState = createSelector(
  R.path(['createQuestion', 'isCreatingQuestion']),
  state => state,
);

export const getCreationQuestionErrorState = createSelector(
  R.path(['createQuestion', 'isCreateQuestionError']),
  state => state,
);
