import { createStackNavigator } from 'react-navigation';
import screens from './screens';
import { CreateQuestionScreen } from '../screens';

export default createStackNavigator({
  [screens.CreateQuestionScreen]: { screen: CreateQuestionScreen },
});
