import {
  compose,
  withHandlers,
  hoistStatics,
  withStateHandlers,
  withPropsOnChange,
} from 'recompose';
import { connect } from 'react-redux';
import { screens } from '../../navigation';
import SignInScreen from './SignInScreenView';
import { signInOperations, signInSelectors } from '../../modules/signIn';
import { AlertService } from '../../services';
import { withLoadingModal } from '../../utils/enhancers';


const mapStateToProps = state => ({
  isLoading: signInSelectors.getSigningInState(state),
});

const mapDispatchToProps = {
  signIn: signInOperations.signIn,

};


const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoadingModal.stateProp('isLoading'),
  withStateHandlers({
    email: '',
    password: '',
    isValid: false,
  }, {
    onChange: () => (field, value) => ({ [field]: value }),
  }),
  withHandlers({
    navigateToRestorePassword: props => () => (
      props.navigation.navigate(screens.RestorePasswordScreen)
    ),
    navigateToAuth: props => () => (
      props.navigation.navigate(screens.AuthorizedApplicationNavigator)
    ),
    signIn: props => async () => {
      if (props.isValid) {
        try {
          await props.signIn({
            email: props.email,
            password: props.password,
          });
          props.navigation.navigate(screens.AuthorizedApplicationNavigator);
        } catch (err) {
          console.log(`err: ${err}`);
          AlertService.SignInErr();
        }
      }
    },
  }),
  withPropsOnChange(
    ['email', 'password'],
    (props) => {
      const isValid = (
        props.email.trim().includes('@') &&
        props.password.trim().length >= 6
      );
      props.onChange('isValid', isValid);
    },
  ),
);


export default hoistStatics(enhancer)(SignInScreen);
