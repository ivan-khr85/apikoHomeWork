import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import { TermsScreen } from '../screens';

export default createStackNavigator({
  [screens.TermsScreen]: { screen: TermsScreen },
});
