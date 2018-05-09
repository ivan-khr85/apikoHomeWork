import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import s, { colorsScheme } from '../../styles';

const AboutUsScreen = () => (
  <View style={s.align}>
    <Text>About Us Screen</Text>
  </View>
);


AboutUsScreen.navigationOptions = ({ navigation }) => ({
  title: 'About Us',
  headerLeft: <Feather
    name="menu"
    color={colorsScheme.mainColor}
    size={35}
    onPress={() => navigation.toggleDrawer()}
  />,
});


export default AboutUsScreen;
