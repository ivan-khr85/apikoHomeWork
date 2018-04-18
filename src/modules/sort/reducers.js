import { sortTypes } from './';

const defaultState = 'createdAt';

export default (state = defaultState, action) => {
  switch (action.type) {
    case sortTypes.SET_SORT:
      return action.value;
    default:
      return state;
  }
};
