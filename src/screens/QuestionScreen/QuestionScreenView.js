import React from 'react';
import { View, Text } from 'react-native';
import s from '../../styles';

const QuestionScreen = () => (
  <View style={s.align}>
    <Text>Question Screen</Text>
  </View>
);

QuestionScreen.navigationOptions = {
  title: 'Question',
};


export default QuestionScreen;
