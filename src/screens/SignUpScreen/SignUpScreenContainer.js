import {
  compose,
  withHandlers,
  hoistStatics,
  withStateHandlers,
  withPropsOnChange,
  lifecycle,
} from 'recompose';
import { connect } from 'react-redux';
import { Keyboard } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { authOperations, authSelectors } from '../../modules/auth';
import { screens } from '../../navigation';
import SignUpScreen from './SignUpScreenView';
import { AlertService } from '../../services';

const resetNavigator = (props) => {
  const resetAction = StackActions.reset({
    key: screens.AuthorizedApplicationNavigator,
    index: 0,
    actions: [NavigationActions.navigate({ routeName: screens.AuthorizedApplicationNavigator })],
  });
  props.navigation.dispatch(resetAction);
};


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
    keyboardShow: false,
    isValid: false,
    isValidPassword: false,
    isValidEmail: false,
    isValidUsername: false,
  }, {
    onChange: () => (field, value) => ({ [field]: value }),
  }),
  withHandlers({
    navigateToSignIn: props => () => props.navigation.navigate(screens.SignInScreen),
    signUp: props => async () => {
      if (props.isValidUsername) {
        if (props.isValidEmail) {
          if (props.isValidPassword) {
            try {
              await props.signUp({
                username: props.username,
                email: props.email,
                password: props.password,
              });
              props.navigation.navigate(screens.AuthorizedApplicationNavigator);
              resetNavigator(props);
            } catch (err) {
              AlertService.SignUpErr();
            }
          } else {
            AlertService.noValidPassword();
          }
        } else {
          AlertService.noValidEmail();
        }
      } else {
        AlertService.noValidUsername();
      }
    },
  }),
  withPropsOnChange(
    ['username', 'email', 'password'],
    (props) => {
      const isValidUsername = (
        props.username.trim().length > 3
      );
      const isValidEmail = (
        props.email.trim().includes('@')
      );
      const isValidPassword = (
        props.password.trim().length >= 8
      );

      props.onChange('isValidEmail', isValidEmail);
      props.onChange('isValidPassword', isValidPassword);
      props.onChange('isValidUsername', isValidUsername);
    },
  ),
  lifecycle({
    componentDidMount() {
      Keyboard.addListener(
        'keyboardDidShow',
        () => this.props.onChange('keyboardShow', true),
      );
      Keyboard.addListener(
        'keyboardDidHide',
        () => this.props.onChange('keyboardShow', false),
      );
    },
    componentWillUnmount() {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    },
  }),
);


export default hoistStatics(enhancer)(SignUpScreen);
