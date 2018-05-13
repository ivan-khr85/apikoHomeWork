import React from 'react';
import { View, Text } from 'react-native';
import s, { headerStyle } from '../../styles';
import BackBtn from '../../components/BackBtn/BackBtn';

const QuestionScreen = () => (
  <View style={s.align}>
    <Text>Question Screen</Text>
  </View>
);

QuestionScreen.navigationOptions = ({ navigation }) => ({
  ...headerStyle,
  headerLeft: (
    <BackBtn navigation={navigation} />
  ),
});


export default QuestionScreen;
