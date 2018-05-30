import React from 'react';
import * as T from 'prop-types';
import { View } from 'react-native';
import Search from '../../libs/react-native-search-box';
import QuestionsList from './components/QuestionsList';
import { DrawerButton, LoadingIndicator, ResultNoFound, EmptyList } from '../../components';
import LoadingError from './components/LoadingError';
import { headerStyle } from '../../styles';
import SearchHistory from './components/SearchHistory';
import s from './style';

const description = 'The search query will appear here.\nYou can use they to search again.';

const SearchScreen = ({
  isLoading,
  hideData,
  questionsList,
  getQuestionsMore,
  hasNoMore,
  isLoadingMore,
  loadingError,
  navigateToQuestion,
  inputValue,
  onChange,
  onPressCancel,

  setItemToHistory,
  searchHistory,
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
          InputValue={inputValue}
          onChangeText={text => onChange('inputValue', text)}
          onCancel={onPressCancel}
          useClearButton={false}
          beforeSearch={() => setItemToHistory(inputValue)}
        />
      </View>
      
      {isLoading && <LoadingIndicator />}
      {!isLoading &&
      <View style={s.questionContainer}>
        <QuestionsList
          data={hideData ? [] : questionsList}
          onEndReachedThreshold={0.7}
          hideData={hideData}
          inputValue={inputValue}
          onEndReached={
            inputValue ?
            () => getQuestionsMore(inputValue) :
            null}
          hasNoMore={hasNoMore}
          isLoadingMore={isLoadingMore}
          navigateToQuestion={navigateToQuestion}
          ListEmptyComponent={
            (inputValue && <ResultNoFound />) || (
            (searchHistory.length < 1) ? (<EmptyList title="No searches yet" description={description} />)
            : (<SearchHistory
              onChange={onChange}
              searchHistory={searchHistory}
            />))
        }
        />
      </View>}
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
  hasNoMore: T.bool,
  isLoadingMore: T.bool,
  loadingError: T.any,
  navigateToQuestion: T.func,
  onChange: T.func,
  inputValue: T.string,
  hideData: T.bool,
  onPressCancel: T.func,
  isLoading: T.bool,
  setItemToHistory: T.func,
  searchHistory: T.array,
};


export default SearchScreen;
