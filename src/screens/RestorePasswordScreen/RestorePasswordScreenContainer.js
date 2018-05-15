import {
  compose,
  withHandlers,
  withStateHandlers,
  withPropsOnChange,
  hoistStatics,
} from 'recompose';
import RestorePasswordScreen from './RestorePasswordScreenView';
import { AlertService } from '../../services';
import { navigationOperations } from '../../modules/navigation';
import { screens } from '../../navigation';


const enhancer = compose(
  withStateHandlers({
    username: '',
    isValid: false,
  }, {
    onChange: () => (field, value) => ({ [field]: value }),
  }),
  withHandlers({
    onSubmit: props => () => {
      if (props.isValid) {
        AlertService.SendEmailRestorePasswordAlert(
          () => props.navigation.dispatch(navigationOperations.navigateToSignUpScreen()),
        );
      } else {
        AlertService.noValidInputData();
      }
    },
  }),
  withPropsOnChange(
    ['username'],
    (props) => {
      const isValid = (
        props.username.trim().length > 3
      );
      props.onChange('isValid', isValid);
    },
  ),
);


export default hoistStatics(enhancer)(RestorePasswordScreen);
