import { compose, withHandlers, hoistStatics } from 'recompose';
// import { StackActions, NavigationActions } from 'react-navigation';
import { screens } from '../../navigation';
import SignInScreen from './SignInScreenView';


/* It`s worked, but I disable back btn */


// const resetNavigator = (props) => {
//   const resetAction = StackActions.reset({
//     key: screens.AuthorizedApplicationNavigator,
//     index: 0,
//     actions: [NavigationActions.navigate({ routeName: screens.AuthorizedApplicationNavigator })],
//   });
//   props.navigation.dispatch(resetAction);
// };


const enhancer = compose(
  withHandlers({
    navigateToRestorePassword: props => () => (
      props.navigation.navigate(screens.RestorePasswordScreen)
    ),
    navigateToAuth: props => () => (
      props.navigation.navigate(screens.AuthorizedApplicationNavigator)
      //  && resetNavigator(props)
    ),
    
  }),
);


export default hoistStatics(enhancer)(SignInScreen);
