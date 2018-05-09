import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import { SearchScreen } from '../screens';

export default createStackNavigator({
  [screens.SearchScreen]: { screen: SearchScreen },
});
