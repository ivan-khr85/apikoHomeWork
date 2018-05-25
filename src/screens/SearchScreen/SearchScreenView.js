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
import SearchHistory from './components/SearchHistory';
import s from './style';


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
      
      {isLoading && <Loading />}

      {!isLoading &&
      <View style={s.questionContainer}>
        <QuestionsList
          data={hideData ? [] : questionsList}
          onEndReachedThreshold={0.7}
          hideData={hideData}
          onEndReached={
            inputValue ?
            () => getQuestionsMore(inputValue) :
            null}
          hasNoMore={hasNoMore}
          isLoadingMore={isLoadingMore}
          navigateToQuestion={navigateToQuestion}
          ListEmptyComponent={<SearchHistory onChange={onChange} />}
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
};


export default SearchScreen;
