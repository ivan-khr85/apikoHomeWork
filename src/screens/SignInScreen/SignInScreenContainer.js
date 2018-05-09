import { compose, withHandlers, hoistStatics } from 'recompose';
import { screens } from '../../navigation';
import SignInScreen from './SignInScreenView';


const enhancer = compose(
  withHandlers({
    navigateToRestorePassword: props => () => (
      props.navigation.navigate(screens.RestorePasswordScreen)
    ),
    navigateToSignIn: props => () => (
      props.navigation.navigate(screens.AuthorizedApplicationNavigator)
    ),
    
  }),
);


export default hoistStatics(enhancer)(SignInScreen);
