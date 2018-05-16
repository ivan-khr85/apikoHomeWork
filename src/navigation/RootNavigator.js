import React from 'react';
import T from 'prop-types';
import { createSwitchNavigator } from 'react-navigation';
import { screens } from './';
import { addNavigationListener } from '../store';
import AuthorizedApplicationNavigator from './AuthorizedApplicationNavigator';
import UnauthorizedApplicationNavigator from './UnauthorizedApplicationNavigator';
import enhancer from './RootNavigatorEnhancer';

export const RootNavigator = createSwitchNavigator({
  [screens.AuthorizedApplicationNavigator]: { screen: AuthorizedApplicationNavigator },
  [screens.UnauthorizedApplicationNavigator]: { screen: UnauthorizedApplicationNavigator },
}, { initialRouteName: screens.UnauthorizedApplicationNavigator });

const RootNavigatorContainer = ({
  dispatch,
  state,
}) => (
  <RootNavigator
    navigation={{
      dispatch,
      state,
      addListener: addNavigationListener,
    }}
  />
);

RootNavigatorContainer.propTypes = {
  dispatch: T.func,
  state: T.object,
};

export default enhancer(RootNavigatorContainer);
