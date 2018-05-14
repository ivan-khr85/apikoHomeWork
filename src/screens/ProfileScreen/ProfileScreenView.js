import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles, headerStyle } from '../../styles';
import { DrawerButton } from '../../components';


const ProfileScreen = () => (
  <View style={globalStyles.align}>
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
