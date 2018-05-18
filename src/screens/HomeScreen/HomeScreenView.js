import React from 'react';
import * as T from 'prop-types';
import { View } from 'react-native';
import { headerStyle } from '../../styles';
import s from './style';
import DrawerButtonView from '../../components/DrawerButton/DrawerButtonView';
import QuestionsList from './components/QuestionsList';
import { ListHeader } from '../../components';
import LoadingError from './components/LoadingError';


const HomeScreen = ({
  questionsList,
  getQuestionsMore,
  getQuestions,
  isLoading,
  hasNoMore,
  isLoadingMore,
  loadingError,
  navigateToQuestion,
}) =>
  (loadingError ? (
    <View style={s.container}>
      <ListHeader
        headerText="User questions"
        styleContainer={s.headerContainer}
        styleText={s.headerText}
      />
      <LoadingError />
    </View>
  ) : (
    <View style={s.container}>
      <QuestionsList
        onRefresh={getQuestions}
        refreshing={isLoading}
        data={questionsList}
        onEndReachedThreshold={0.7}
        onEndReached={getQuestionsMore}
        hasNoMore={hasNoMore}
        isLoadingMore={isLoadingMore}
        onPress={navigateToQuestion}
      />
    </View>
  ));

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
  isLoading: T.bool,
  getQuestions: T.func,
  hasNoMore: T.bool,
  isLoadingMore: T.bool,
  loadingError: T.any,
  navigateToQuestion: T.func,
  
};


export default HomeScreen;
