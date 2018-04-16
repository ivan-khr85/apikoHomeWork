import { questionTypes } from './';

const defaultState = {
  CREATE_QUESTION: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case questionTypes.SET_LOADER:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};
