import { createStackNavigator } from 'react-navigation';
import { screens } from './';
import AuthorizedApplicationNavigator from './AuthorizedApplicationNavigator';
import UnauthorizedApplicationNavigator from './UnauthorizedApplicationNavigator';


export default createStackNavigator({
  [screens.UnauthorizedApplicationNavigator]: { screen: UnauthorizedApplicationNavigator },
  [screens.AuthorizedApplicationNavigator]: { screen: AuthorizedApplicationNavigator },
}, {
  headerMode: 'none',
});
