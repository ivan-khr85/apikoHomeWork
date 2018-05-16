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
import { authOperations, authSelectors } from '../../modules/auth';
import { AlertService } from '../../services';


const mapStateToProps = state => ({
  isLoading: authSelectors.getSigningInState(state),
});

const mapDispatchToProps = {
  signIn: authOperations.signIn,

};


const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
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
      } else {
        AlertService.noValidInputData();
      }
    },
  }),
  withPropsOnChange(
    ['email', 'password'],
    (props) => {
      const isValid = (
        props.email.trim().includes('@') &&
        props.password.trim().length >= 8
      );
      props.onChange('isValid', isValid);
    },
  ),
);


export default hoistStatics(enhancer)(SignInScreen);
