import { searchTypes } from './';

const defaultState = '';

export default (state = defaultState, action) => {
  switch (action.type) {
    case searchTypes.SET_SEARCH:
      return action.value;
    case searchTypes.CLEAR_SEARCH:
      return '';
    default:
      return state;
  }
};
