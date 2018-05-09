import React from 'react';
import { View, Text } from 'react-native';
import s from '../../styles';
import { DrawerButton } from '../../components';


const ProfileScreen = () => (
  <View style={s.align}>
    <Text>Profile Screen</Text>
  </View>
);

ProfileScreen.navigationOptions = ({ navigation }) => ({
  title: 'Profile',
  headerLeft: (
    <DrawerButton
      onPress={() => navigation.toggleDrawer()}
      onLongPress={() => navigation.toggleDrawer()}
    />
  ),
});

export default ProfileScreen;
