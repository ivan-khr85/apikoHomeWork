import React from 'react';
import T from 'prop-types';
import { View, Text, Image } from 'react-native';
import { headerStyle } from '../../styles';
import { DrawerButton, ListHeader } from '../../components';
import QuestionsList from './components/QuestionsList';
import userDefault from '../../../assets/images/userDefault.png';
import s from './style';

const ProfileScreen = ({
  getUserAvatarUrl,
  userEmail,
  username,
  userQuestions,
  navigateToQuestion,
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
      <Text style={s.questionsTitleText}>Last posted questions</Text>
    </View>
    <QuestionsList
      data={userQuestions}
      onPress={navigateToQuestion}
    />
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
  userQuestions: T.array,
  navigateToQuestion: T.func,
};

export default ProfileScreen;
