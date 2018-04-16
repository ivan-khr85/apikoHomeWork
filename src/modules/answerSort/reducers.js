import { answerSortTypes } from './';

const defaultState = 'createdAt';

export default (state = defaultState, action) => {
  switch (action.type) {
    case answerSortTypes.SET_ANSWER_SORT:
      return action.value;
    default:
      return state;
  }
};
