import React from 'react';
import { ScrollView } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import s from './style';

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView style={s.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

export default CustomDrawerContentComponent;
