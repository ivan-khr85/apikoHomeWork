import { createDrawerNavigator } from 'react-navigation';
import { screens } from './';
import HomeNavigator from './HomeNavigator';
import AboutUsNavigator from './AboutUsNavigator';
import SearchNavigator from './SearchNavigator';
import CreateQuestionNavigator from './CreateQuestionNavigator';
import ProfileNavigator from './ProfileNavigator';
import { AuthorizedDrawer } from './components';
import { screenDimensions } from '../styles';


export default createDrawerNavigator({
  [screens.HomeScreen]: { screen: HomeNavigator },
  [screens.SearchScreen]: { screen: SearchNavigator },
  [screens.CreateQuestionScreen]: { screen: CreateQuestionNavigator },
  [screens.ProfileScreen]: { screen: ProfileNavigator },
  [screens.AboutUsScreen]: { screen: AboutUsNavigator },
  // [screens.TermsScreen]: { screen: TermsNavigator },
}, {
  drawerWidth: screenDimensions.width - 56,
  drawerPosition: 'left',
  contentComponent: AuthorizedDrawer,
});
