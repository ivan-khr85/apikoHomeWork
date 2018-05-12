import React from 'react';
import { View, Text } from 'react-native';
import { DrawerButton } from '../../components';
import s, { headerStyle } from '../../styles';

const AboutUsScreen = () => (
  <View style={s.align}>
    <Text>About Us Screen</Text>
  </View>
);


AboutUsScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: (
    <DrawerButton
      onPress={() => navigation.toggleDrawer()}
      onLongPress={() => navigation.toggleDrawer()}
    />
  ),
  ...headerStyle,
});


export default AboutUsScreen;
