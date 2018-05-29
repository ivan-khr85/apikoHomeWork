import React from 'react';
import T from 'prop-types';
import { View, Text, Image } from 'react-native';
import { headerStyle } from '../../styles';
import { DrawerButton, ListHeader } from '../../components';
import userDefault from '../../../assets/images/userDefault.png';
import s from './style';

const ProfileScreen = ({
  getUserAvatarUrl,
  userEmail,
  username,
}) => (
  <View style={s.container}>
    <ListHeader
      headerText="Profile"
      styleContainer={s.headerContainer}
      styleText={s.headerText}
    />
    <View style={s.userInfo}>
      <View style={s.iconContainer}>
        <Image
          defaultSource={userDefault}
          source={{ uri: getUserAvatarUrl() }}
          style={s.icon}
        />
      </View>
      <View style={s.emailContainer}>
        <Text style={s.username}>@{username}</Text>
        <Text style={s.email}>{userEmail}</Text>
      </View>
    </View>
    <View style={s.questionsTitle}>
      <Text style={s.questionsTitleText}>Posted questions</Text>
    </View>
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

ProfileScreen.propTypes = {
  getUserAvatarUrl: T.func,
  userEmail: T.string,
  username: T.string,
};

export default ProfileScreen;
