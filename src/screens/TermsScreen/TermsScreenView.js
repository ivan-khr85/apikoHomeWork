import React from 'react';
import { WebView } from 'react-native';
import DrawerButton from '../../components/DrawerButton';

const TermsScreen = () => (
  <WebView
    source={{ uri: 'https://github.com/facebook/react-native' }}
  />
);

TermsScreen.navigationOptions = ({ navigation }) => ({
  title: 'Terms & Conditions',
  headerLeft: (
    <DrawerButton
      onPress={() => navigation.toggleDrawer()}
      onLongPress={() => navigation.toggleDrawer()}
    />
  ),
});

export default TermsScreen;
