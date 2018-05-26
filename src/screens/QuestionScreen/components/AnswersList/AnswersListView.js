import React from 'react';
import { FlatList } from 'react-native';
import T from 'prop-types';
import * as R from 'ramda';
import AnswerListItem from '../AnswerListItem';
import AnswersHeader from '../AnswersHeader';
import { Separator, ListFooter } from '../../../../components';
import EmptyList from '../EmptyList';
// import s from './style';

const QuestionsList = ({
  hasNoMore,
  isLoadingMore,
  data,
  count,
  getAnswersMore,
  loadingMoreError,
  id,
  ...props
}) => (
  <FlatList
    {...props}
    data={data}
    ItemSeparatorComponent={() => <Separator />}
    keyExtractor={(item, index) => (`${R.prop('_id')(item)}-${item.createdAt}-${index}`)}
    ListFooterComponent={() => (
      data.length ? <ListFooter
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
  data: T.array,
  count: T.number,
  getAnswersMore: T.func,
  loadingMoreError: T.bool,
  id: T.string,
};


export default QuestionsList;
