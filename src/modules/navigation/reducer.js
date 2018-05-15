import { RootNavigator } from '../../navigation';

const navReducer = (state, action) => {
  switch (action.type) {
    default: {
      const nextState = RootNavigator.router.getStateForAction(action, state);
      return (nextState || state);
    }
  }
};

export default navReducer;
