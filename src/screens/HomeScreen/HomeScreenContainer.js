import { compose, withHandlers, hoistStatics } from 'recompose';
import HomeScreen from './HomeScreenView';
import { screens } from '../../navigation';


const enhancer = compose(
  withHandlers({
    navigateToQuestion: props => () => props.navigation.navigate(screens.QuestionScreen),
  }),
);


export default hoistStatics(enhancer)(HomeScreen);
