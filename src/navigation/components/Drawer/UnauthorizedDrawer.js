import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { DrawerItem, DrawerLogo } from '../../../components';
import { LinkingService } from '../../../services';
import { screens } from '../../';
import { globalStyles } from '../../../styles';


const UnauthorizedDrawer = props => (
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
        title={screens.AboutUsScreen}
        iconName="ios-information-circle"
      />
      <DrawerItem
        {...props}
        onPress={LinkingService.openTerms}
        title="Terms & Conditions"
        iconName="ios-document"
      />


      <DrawerItem
        {...props}
        title={screens.SignUpScreen}
        iconName="md-log-in"
        borderTop
      />

    </SafeAreaView>
  </ScrollView>
);


export default UnauthorizedDrawer;
