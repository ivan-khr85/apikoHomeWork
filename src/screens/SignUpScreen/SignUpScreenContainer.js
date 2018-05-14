import {
  compose,
  withHandlers,
  hoistStatics,
  withStateHandlers,
  withPropsOnChange,
} from 'recompose';
import R from 'ramda';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../modules/auth';
import { screens } from '../../navigation';
import SignUpScreen from './SignUpScreenView';
import { AlertService } from '../../services';
import { withLoadingModal } from '../../utils/enhancers';


const mapStateToProps = state => ({
  isLoading: authSelectors.getSigningUpState(state),
  // isLoading: true,
});

const mapDispatchToProps = {
  signUp: authOperations.signUp,

};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoadingModal.stateProp('isLoading'),
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
          await props.signUp(R.props(
            ['username', 'email', 'password'],
            props,
          ));
        } catch (err) {
          AlertService.SignUpErr();
        }
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
