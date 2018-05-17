import React from 'react';
import * as T from 'prop-types';
import { View } from 'react-native';
import { headerStyle } from '../../styles';
import s from './style';
import DrawerButtonView from '../../components/DrawerButton/DrawerButtonView';
import { ListHeader } from '../../components';
import QuestionsList from './components/QuestionsList';

const HomeScreen = ({
  questionsList,
  getQuestionsMore,
}) => (
  <View style={s.container}>
    {/* <ListHeader
      headerText="User questions"
      styleText={s.headerText}
      styleContainer={s.headerContainer}
    /> */}
    <QuestionsList
      data={questionsList}
      onEndReachedThreshold={0.7}
      onEndReached={getQuestionsMore}
    />
  </View>
);

HomeScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: (
    <DrawerButtonView
      onPress={() => navigation.toggleDrawer()}
      onLongPress={() => navigation.toggleDrawer()}
    />
  ),
  ...headerStyle,
});

HomeScreen.propTypes = {
  questionsList: T.array,
  getQuestionsMore: T.func,

};


export default HomeScreen;
