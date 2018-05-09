import React from 'react';
import { View, Text } from 'react-native';
import DrawerButton from '../../components/DrawerButton';
import s from '../../styles';

const AboutUsScreen = () => (
  <View style={s.align}>
    <Text>About Us Screen</Text>
  </View>
);


AboutUsScreen.navigationOptions = ({ navigation }) => ({
  title: 'About Us',
  headerLeft: (
    <DrawerButton
      onPress={() => navigation.toggleDrawer()}
      onLongPress={() => navigation.toggleDrawer()}
    />
  ),
});


export default AboutUsScreen;
