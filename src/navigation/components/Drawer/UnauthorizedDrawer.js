import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView, NavigationActions } from 'react-navigation';
import * as T from 'prop-types';
import { DrawerItem, DrawerLogo } from '../../../components';
import { LinkingService } from '../../../services';
import { screens } from '../../';
import globalStyles from '../../../styles';


const UnauthorizedDrawer = ({
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
          onPress={navigateToScreen(screens.AboutUsScreen)}
          title={screens.AboutUsScreen}
          activeItemKey={activeItemKey}
          iconName="ios-information-circle"
        />
        <DrawerItem
          onPress={LinkingService.openTerms}
          title="Terms & Conditions"
          iconName="ios-document"
        />


        <DrawerItem
          onPress={navigateToScreen(screens.SignUpScreen)}
          title={screens.SignUpScreen}
          activeItemKey={activeItemKey}
          iconName="md-log-in"
          borderTop
        />

    
      </SafeAreaView>
    </ScrollView>
  );
};

UnauthorizedDrawer.propTypes = {
  activeItemKey: T.string,
  navigation: T.object,
};

export default UnauthorizedDrawer;
