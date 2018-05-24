import { NavigationActions } from 'react-navigation';
import { screens } from '../../navigation';


export const navigateTo = routeName =>
  NavigationActions.navigate({ routeName });

export const navigateToAuthorized = () =>
  NavigationActions.navigate({ routeName: screens.AuthorizedApplicationNavigator });

export const navigateToUnauthorized = () =>
  NavigationActions.navigate({ routeName: screens.UnauthorizedApplicationNavigator });

export const navigateToCreateQuestion = () =>
  NavigationActions.navigate({ routeName: screens.CreateQuestionScreen });

export const navigateToSignUp = () =>
  NavigationActions.navigate({ routeName: screens.SignUpScreen });

export const navigateToSearch = () =>
  NavigationActions.navigate({ routeName: screens.SearchScreen });
