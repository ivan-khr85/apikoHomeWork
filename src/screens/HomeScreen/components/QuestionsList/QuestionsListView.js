import React from 'react';
import { FlatList } from 'react-native';
import T from 'prop-types';
import * as R from 'ramda';
import ListItem from '../ListItem';
import EmptyList from '../EmptyList';
import { Separator, ListHeader, ListFooter } from '../../../../components';
import s from './style';

const QuestionsList = ({
  hasNoMore,
  isLoadingMore,
  onPress,
  loadingMoreError,
  getQuestionsMore,
  questionsList,
  isLoading,
  ...props
}) => (
  <FlatList
    {...props}
    refreshing={isLoading}
    onEndReachedThreshold={0.7}
    onEndReached={getQuestionsMore}
    isLoadingMore={isLoadingMore}
    data={questionsList}
    ItemSeparatorComponent={() => <Separator />}
    keyExtractor={(item, index) => (
      `${R.prop('_id', item)}-${R.prop('questionId', item)}-${index}`
    )}
    ListFooterComponent={
      <ListFooter
        hasNoMore={hasNoMore}
        isLoadingMore={isLoadingMore}
        loadingMoreError={loadingMoreError}
        onError={getQuestionsMore}
        textFooter="No more questions"
      />}
    ListHeaderComponent={
      <ListHeader
        headerText="User questions"
        styleContainer={s.headerContainer}
        styleText={s.headerText}
      />}
    renderItem={({ item }) => (
      <ListItem
        {...item}
        onPress={onPress}
      />
    )}
    ListEmptyComponent={<EmptyList />}
  />
);

QuestionsList.propTypes = {
  props: T.any,
  isLoading: T.bool,
  hasNoMore: T.bool,
  isLoadingMore: T.bool,
  onPress: T.func,
  loadingMoreError: T.bool,
  getQuestionsMore: T.func,
  questionsList: T.array,
  
};


export default QuestionsList;
