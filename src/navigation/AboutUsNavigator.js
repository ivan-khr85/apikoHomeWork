import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import { AboutUsScreen } from '../screens';

export default createStackNavigator({
  [screens.AboutUsScreen]: { screen: AboutUsScreen },
});
