import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView, NavigationActions } from 'react-navigation';
import * as T from 'prop-types';
import { DrawerItem, DrawerLogo } from '../../../components';
import { LinkingService } from '../../../services';
import { screens } from '../../';
import globalStyles from '../../../styles';


const AuthorizedDrawer = ({
  activeItemKey,
  navigation,
}) => {
  const navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    navigation.dispatch(navigateAction);
  };


  return (
    <ScrollView>
      <SafeAreaView
        style={globalStyles.fillAll}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <DrawerLogo borderBottom />

        <DrawerItem
          onPress={navigateToScreen(screens.HomeScreen)}
          title={screens.HomeScreen}
          activeItemKey={activeItemKey}
          iconName="ios-chatbubbles"
        />
        <DrawerItem
          onPress={navigateToScreen(screens.SearchScreen)}
          title={screens.SearchScreen}
          activeItemKey={activeItemKey}
          iconName="ios-search"
        />
        <DrawerItem
          onPress={navigateToScreen(screens.CreateQuestionScreen)}
          title={screens.CreateQuestionScreen}
          activeItemKey={activeItemKey}
          iconName="ios-add-circle"
        />
        <DrawerItem
          onPress={navigateToScreen(screens.ProfileScreen)}
          title={screens.ProfileScreen}
          activeItemKey={activeItemKey}
          iconName="ios-person"
        />


        <DrawerItem
          onPress={navigateToScreen(screens.AboutUsScreen)}
          title={screens.AboutUsScreen}
          activeItemKey={activeItemKey}
          iconName="ios-information-circle"
          borderTop
        />
        <DrawerItem
          onPress={LinkingService.openTerms}
          title="Terms & Conditions"
          iconName="ios-document"
        />


        <DrawerItem
          onPress={navigateToScreen(screens.UnauthorizedApplicationNavigator)}
          title="Sign Out"
          iconName="md-log-out"
          borderTop
        />


      </SafeAreaView>
    </ScrollView>
  );
};

AuthorizedDrawer.propTypes = {
  activeItemKey: T.string,
  navigation: T.object,
};

export default AuthorizedDrawer;
