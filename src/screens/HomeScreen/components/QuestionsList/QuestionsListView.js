import React from 'react';
import { FlatList } from 'react-native';
import T from 'prop-types';
import * as R from 'ramda';
import ListItem from '../ListItem';
import ListFooter from '../ListFooter';
import EmptyList from '../EmptyList';
import { Separator, ListHeader } from '../../../../components';
import s from './style';

const QuestionsList = ({
  data,
  onEndReachedThreshold,
  onEndReached,
  onRefresh,
  refreshing,
  hasNoMore,
  isLoadingMore,
  onPress,
}) => (
  <FlatList
    onRefresh={onRefresh}
    refreshing={refreshing}
    data={data}
    ItemSeparatorComponent={() => <Separator />}
    keyExtractor={(item, index) => (`${R.prop('_id')(item)}-${item.createdAt}-${index}`)}
    onEndReachedThreshold={onEndReachedThreshold}
    onEndReached={onEndReached}
    ListFooterComponent={() => (
      <ListFooter
        hasNoMore={hasNoMore}
        isLoadingMore={isLoadingMore}
      />
    )}
    ListHeaderComponent={() => (
      <ListHeader
        headerText="User questions"
        styleContainer={s.headerContainer}
        styleText={s.headerText}
      />
    )}
    renderItem={({ item }) => (
      <ListItem
        createdAt={item.createdAt}
        description={item.description}
        tags={item.tags}
        title={item.title}
        _id={item._id}
        onPress={onPress}
      />
    )}
    ListEmptyComponent={() => (
      <EmptyList />
    )}
  />
);

QuestionsList.propTypes = {
  data: T.array,
  onEndReachedThreshold: T.number,
  onEndReached: T.func,
  onRefresh: T.func,
  refreshing: T.bool,
  hasNoMore: T.bool,
  isLoadingMore: T.bool,
  onPress: T.func,
};


export default QuestionsList;
