import { countChangeTypes } from './';

const defaultState = 0;

export default (state = defaultState, action) => {
  switch (action.type) {
    case countChangeTypes.COUNT_UP:
      return state + 1;
    case countChangeTypes.COUNT_DOWN:
      return state - 1;
    default:
      return state;
  }
};
