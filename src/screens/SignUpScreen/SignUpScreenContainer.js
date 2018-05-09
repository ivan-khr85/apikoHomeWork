import { compose, withHandlers, hoistStatics } from 'recompose';
import { screens } from '../../navigation';
import SignUpScreen from './SignUpScreenView';


const enhancer = compose(
  withHandlers({
    navigateToSignIn: props => () => props.navigation.navigate(screens.SignInScreen),
  }),
);


export default hoistStatics(enhancer)(SignUpScreen);
