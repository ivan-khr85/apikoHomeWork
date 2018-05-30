import React from 'react';
import { FlatList } from 'react-native';
import T from 'prop-types';
import * as R from 'ramda';
import AnswerListItem from '../AnswerListItem';
import AnswersHeader from '../AnswersHeader';
import { Separator, ListFooter } from '../../../../components';
import EmptyList from '../EmptyList';

const QuestionsList = ({
  hasNoMore,
  isLoadingMore,
  answers,
  count,
  getAnswersMore,
  loadingMoreError,
  getAnswers,
  id,
  isLoading,
  ...props
}) => (
  <FlatList
    {...props}
    data={answers}
    onEndReachedThreshold={0.7}
    refreshing={isLoading}
    onRefresh={() => getAnswers(id)}
    onEndReached={() => getAnswersMore(id)}
    ItemSeparatorComponent={() => <Separator />}
    keyExtractor={(item, index) => (
      `${R.prop('_id', item)}-${R.prop('questionId', item)}-${index}`
    )}
    ListFooterComponent={() => (
      answers.length ? <ListFooter
        hasNoMore={hasNoMore}
        isLoadingMore={isLoadingMore}
        loadingMoreError={loadingMoreError}
        onError={() => getAnswersMore(id)}
        textFooter="No more answers"
      /> : null
    )}
    renderItem={({ item }) => (
      <AnswerListItem
        {...item}
      />
    )}
    ListEmptyComponent={() => (
      <EmptyList />
    )}
    ListHeaderComponent={() => (
      <AnswersHeader
        countAnswer={count}
      />
    )}
  />
);

QuestionsList.propTypes = {
  props: T.any,
  hasNoMore: T.bool,
  isLoadingMore: T.bool,
  onPress: T.func,
  answers: T.array,
  count: T.number,
  getAnswersMore: T.func,
  loadingMoreError: T.bool,
  id: T.string,
  getAnswers: T.func,
  isLoading: T.bool,
  
};


export default QuestionsList;
