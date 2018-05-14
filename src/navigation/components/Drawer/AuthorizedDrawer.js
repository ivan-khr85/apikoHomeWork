import React from 'react';
import { ScrollView } from 'react-native';
import * as T from 'prop-types';
import { SafeAreaView } from 'react-navigation';
import { DrawerItem, DrawerLogo } from '../../../components';
import { LinkingService, AlertService } from '../../../services';
import { screens } from '../../';
import { globalStyles } from '../../../styles';


const AuthorizedDrawer = props => (
  <ScrollView>
    <SafeAreaView
      style={globalStyles.fillAll}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <DrawerLogo borderBottom />

      <DrawerItem
        {...props}
        title={screens.HomeScreen}
        iconName="ios-chatbubbles"
      />
      <DrawerItem
        {...props}
        title={screens.SearchScreen}
        iconName="ios-search"
      />
      <DrawerItem
        {...props}
        title={screens.CreateQuestionScreen}
        iconName="ios-add-circle"
      />
      <DrawerItem
        {...props}
        title={screens.ProfileScreen}
        iconName="ios-person"
      />


      <DrawerItem
        {...props}
        title={screens.AboutUsScreen}
        iconName="ios-information-circle"
        borderTop
      />
      <DrawerItem
        {...props}
        onPress={LinkingService.openTerms}
        title="Terms & Conditions"
        iconName="ios-document"
      />


      <DrawerItem
        {...props}
        onPress={() => AlertService.singOut(
         () => props.navigation.navigate(screens.UnauthorizedApplicationNavigator),
        )}
        title="Sign Out"
        iconName="md-log-out"
        borderTop
      />


    </SafeAreaView>
  </ScrollView>
);

AuthorizedDrawer.propTypes = {
  navigation: T.shape({
    navigate: T.func,
  }),
};

export default AuthorizedDrawer;
