import { NavigationActions } from 'react-navigation';
import { screens } from '../../navigation';


export const navigateTo = routeName =>
  NavigationActions.navigate({ routeName });

export const navigateToAuthorized = () =>
  NavigationActions.navigate({ routeName: screens.AuthorizedApplicationNavigator });

export const navigateToUnauthorized = () =>
  NavigationActions.navigate({ routeName: screens.UnauthorizedApplicationNavigator });
