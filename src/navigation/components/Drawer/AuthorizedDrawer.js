import React from 'react';
import { ScrollView, AsyncStorage } from 'react-native';
import * as T from 'prop-types';
import { SafeAreaView } from 'react-navigation';
import { DrawerItem, DrawerLogo } from '../../../components';
import { LinkingService, AlertService } from '../../../services';
import { screens } from '../../';
import { globalStyles } from '../../../styles';
import { navigationOperations } from '../../../modules/navigation';


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
          () => (
            props.navigation.dispatch(navigationOperations.navigateToUnauthorized()) &&
            AsyncStorage.clear(() => console.warn)
          ),
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
    dispatch: T.func,
  }),
};

export default AuthorizedDrawer;
