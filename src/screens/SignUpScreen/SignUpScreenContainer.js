import {
  compose,
  withHandlers,
  hoistStatics,
  withStateHandlers,
  withPropsOnChange,
} from 'recompose';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../modules/auth';
import { screens } from '../../navigation';
import SignUpScreen from './SignUpScreenView';
import { AlertService } from '../../services';


const mapStateToProps = state => ({
  isLoading: authSelectors.getSigningUpState(state),
});

const mapDispatchToProps = {
  signUp: authOperations.signUp,
};


const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers({
    username: '',
    email: '',
    password: '',
    isValid: false,
  }, {
    onChange: () => (field, value) => ({ [field]: value }),
  }),
  withHandlers({
    navigateToSignIn: props => () => props.navigation.navigate(screens.SignInScreen),
    signUp: props => async () => {
      if (props.isValid) {
        try {
          await props.signUp({
            username: props.username,
            email: props.email,
            password: props.password,
          });
          props.navigation.navigate(screens.AuthorizedApplicationNavigator);
        } catch (err) {
          AlertService.SignUpErr();
        }
      } else {
        AlertService.noValidInputData();
      }
    },
  }),
  withPropsOnChange(
    ['username', 'email', 'password'],
    (props) => {
      const isValid = (
        props.username.trim().length > 3 &&
        props.email.trim().includes('@') &&
        props.password.trim().length >= 8
      );
      props.onChange('isValid', isValid);
    },
  ),
);


export default hoistStatics(enhancer)(SignUpScreen);
