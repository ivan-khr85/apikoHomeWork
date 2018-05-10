import { createDrawerNavigator } from 'react-navigation';
import { screens } from './';
import HomeNavigator from './HomeNavigator';
import AboutUsNavigator from './AboutUsNavigator';
import SignUpNavigator from './SignUpNavigator';
import { UnauthorizedDrawer } from './components';
import { screenDimensions } from '../styles';


export default createDrawerNavigator({
  [screens.HomeScreen]: { screen: HomeNavigator },
  [screens.AboutUsScreen]: { screen: AboutUsNavigator },
  [screens.SignUpScreen]: { screen: SignUpNavigator },
}, {
  drawerWidth: screenDimensions.width - 56,
  drawerPosition: 'left',
  contentComponent: UnauthorizedDrawer,
});
