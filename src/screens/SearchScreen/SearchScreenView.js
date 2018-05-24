import React from 'react';
import * as T from 'prop-types';
import { View } from 'react-native';
import Search from '../../libs/react-native-search-box';
import QuestionsList from './components/QuestionsList';
import { DrawerButton } from '../../components';
import LoadingError from './components/LoadingError';
import { headerStyle } from '../../styles';
import Loading from './components/Loading';
import EmptyList from './components/EmptyList';
import s from './style';


const SearchScreen = ({
  isLoading,
  hideData,
  questionsList,
  getQuestionsMore,
  getQuestions,
  hasNoMore,
  isLoadingMore,
  loadingError,
  navigateToQuestion,
  inputValue,
  onChange,
  onPressCancel,
}) =>
  (loadingError ? (
    <View style={s.container}>
      <LoadingError />
    </View>
  ) : (
    <View style={s.container}>
      <View style={s.searchContainer}>
        <Search
          style={s.searchInput}
          inputHight={36}
          value={inputValue}
          onChangeText={text => onChange('inputValue', text)}
          onCancel={onPressCancel}
          useClearButton={false}
        />
      </View>
      {!isLoading &&
        <View style={s.questionContainer}>
          <QuestionsList
            data={hideData ? [] : questionsList}
            // onEndReachedThreshold={0.7}
            // onEndReached={
            //     inputValue ?
            //     getQuestionsMore(inputValue) :
            //     () => { }
            // }
            hasNoMore={hasNoMore}
            isLoadingMore={isLoadingMore}
            onPress={navigateToQuestion}
            ListEmptyComponent={<EmptyList />}
          />
        </View>}
      {isLoading && <Loading />}
    </View>
  ));

SearchScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: (
    <DrawerButton
      onPress={() => navigation.toggleDrawer()}
      onLongPress={() => navigation.toggleDrawer()}
    />
  ),
  ...headerStyle,
});

SearchScreen.propTypes = {
  questionsList: T.array,
  getQuestionsMore: T.func,
  getQuestions: T.func,
  hasNoMore: T.bool,
  isLoadingMore: T.bool,
  loadingError: T.any,
  navigateToQuestion: T.func,
  onChange: T.func,
  inputValue: T.string,
  hideData: T.bool,

};


export default SearchScreen;
