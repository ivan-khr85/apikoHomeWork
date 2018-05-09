import React from 'react';
import { WebView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colorsScheme } from '../../styles';

const TermsScreen = () => (
  <WebView
    source={{ uri: 'https://github.com/facebook/react-native' }}
  />
);

TermsScreen.navigationOptions = ({ navigation }) => ({
  title: 'Terms & Conditions',
  headerLeft: <Feather
    name="menu"
    color={colorsScheme.mainColor}
    size={35}
    onPress={() => navigation.toggleDrawer()}
  />,
});

export default TermsScreen;
