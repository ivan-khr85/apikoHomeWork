import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import { SignUpScreen, SignInScreen, RestorePasswordScreen } from '../screens';

export default createStackNavigator({
  [screens.SignUpScreen]: { screen: SignUpScreen },
  [screens.SignInScreen]: { screen: SignInScreen },
  [screens.RestorePasswordScreen]: { screen: RestorePasswordScreen },
});
