import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import { HomeScreen, QuestionScreen } from '../screens';

export default createStackNavigator({
  [screens.HomeScreen]: { screen: HomeScreen },
  [screens.QuestionScreen]: { screen: QuestionScreen },
});
