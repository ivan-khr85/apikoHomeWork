import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import { ProfileScreen } from '../screens';

export default createStackNavigator({
  [screens.ProfileScreen]: { screen: ProfileScreen },
});
