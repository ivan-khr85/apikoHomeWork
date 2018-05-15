import {
  compose,
  withHandlers,
  withStateHandlers,
  withPropsOnChange,
  hoistStatics,
} from 'recompose';
import RestorePasswordScreen from './RestorePasswordScreenView';
import { AlertService } from '../../services';
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
        AlertService.singOut(
          props.navigation.navigate(screens.UnauthorizedApplicationNavigator),
        );
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
