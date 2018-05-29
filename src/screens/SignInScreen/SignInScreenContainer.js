import {
  compose,
  withHandlers,
  hoistStatics,
  withStateHandlers,
  withPropsOnChange,
  lifecycle,
} from 'recompose';
import { Keyboard, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
import { screens } from '../../navigation';
import SignInScreen from './SignInScreenView';
import { authOperations, authSelectors } from '../../modules/auth';
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
    keyboardShow: false,
    isValidPassword: false,
    isValidEmail: false,
  }, {
    onChange: () => (field, value) => ({ [field]: value }),
  }),
  withHandlers({
    navigateToRestorePassword: props => () => (
      props.navigation.navigate(screens.RestorePasswordScreen)
    ),
    signIn: props => async () => {
      if (props.isValidEmail) {
        if (props.isValidPassword) {
          try {
            await props.signIn({
              email: props.email,
              password: props.password,
            });
            props.navigation.navigate(screens.AuthorizedApplicationNavigator);
            resetNavigator(props);
          } catch (err) {
            AlertService.SignInErr();
          }
        } else {
          AlertService.noValidPassword();
        }
      } else {
        AlertService.noValidEmail();
      }
    },
  }),
  withPropsOnChange(
    ['email', 'password'],
    (props) => {
      const isValidEmail = (
        props.email.trim().includes('@')
      );
      const isValidPassword = (
        props.password.trim().length >= 8
      );

      props.onChange('isValidEmail', isValidEmail);
      props.onChange('isValidPassword', isValidPassword);
    },
  ),
  withPropsOnChange(
    ['keyboardShow'],
    () => {
      LayoutAnimation.easeInEaseOut();
    }),
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


export default hoistStatics(enhancer)(SignInScreen);
