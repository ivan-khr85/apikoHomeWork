import { createSwitchNavigator } from 'react-navigation';
import { screens } from './';
import AuthorizedApplicationNavigator from './AuthorizedApplicationNavigator';
import UnauthorizedApplicationNavigator from './UnauthorizedApplicationNavigator';


export default createSwitchNavigator({
  [screens.UnauthorizedApplicationNavigator]: { screen: UnauthorizedApplicationNavigator },
  [screens.AuthorizedApplicationNavigator]: { screen: AuthorizedApplicationNavigator },
});
