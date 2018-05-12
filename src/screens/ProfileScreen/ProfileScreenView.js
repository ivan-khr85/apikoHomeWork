import React from 'react';
import { View, Text } from 'react-native';
import s, { headerStyle } from '../../styles';
import { DrawerButton } from '../../components';


const ProfileScreen = () => (
  <View style={s.align}>
    <Text>Profile Screen</Text>
  </View>
);

ProfileScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: (
    <DrawerButton
      onPress={() => navigation.toggleDrawer()}
      onLongPress={() => navigation.toggleDrawer()}
    />
  ),
  ...headerStyle,
});

export default ProfileScreen;
