import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { headerStyle } from '../../styles';
import s from './style';
import BackBtn from '../../components/BackBtn/BackBtn';

const QuestionScreen = ({
  question,
}) => (
  <View style={s.container}>
    <Text>Question Screen</Text>
  </View>
);


QuestionScreen.navigationOptions = ({ navigation }) => ({
  ...headerStyle,
  headerLeft: (
    <BackBtn navigation={navigation} />
  ),
});


QuestionScreen.propsTypes = {
  question: T.object,
  
};

export default QuestionScreen;
