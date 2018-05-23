import React from 'react';
import { FlatList } from 'react-native';
import T from 'prop-types';
import * as R from 'ramda';
import AnswerListItem from '../AnswerListItem';
import AnswersHeader from '../AnswersHeader';
// import ListFooter from '../ListFooter';
// import EmptyList from '../EmptyList';
import { Separator } from '../../../../components';
import s from './style';

const QuestionsList = ({
  hasNoMore,
  isLoadingMore,
  data,
  count,
  ...props
}) => (
  <FlatList
    {...props}
    data={data}
    ItemSeparatorComponent={() => <Separator />}
    keyExtractor={(item, index) => (`${R.prop('_id')(item)}-${item.createdAt}-${index}`)}
    // ListFooterComponent={() => (
    //   <ListFooter
    //     hasNoMore={hasNoMore}
    //     isLoadingMore={isLoadingMore}
    //   />
    // )}
    renderItem={({ item }) => (
      <AnswerListItem
        {...item}
      />
    )}
    // ListEmptyComponent={() => (
    //   <EmptyList />
    // )}
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
};


export default QuestionsList;
