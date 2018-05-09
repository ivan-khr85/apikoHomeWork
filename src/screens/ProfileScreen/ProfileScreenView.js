import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import s, { colorsScheme } from '../../styles';

const ProfileScreen = () => (
  <View style={s.align}>
    <Text>Profile Screen</Text>
  </View>
);

ProfileScreen.navigationOptions = ({ navigation }) => ({
  title: 'Profile',
  headerLeft: <Feather
    name="menu"
    color={colorsScheme.mainColor}
    size={35}
    onPress={() => navigation.toggleDrawer()}
  />,
});

export default ProfileScreen;
