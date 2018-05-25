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
  hasNoMore,
  isLoadingMore,
  onPress,
  ...props
}) => (
  <FlatList
    {...props}
    ItemSeparatorComponent={() => <Separator />}
    keyExtractor={(item, index) => (`${R.prop('_id')(item)}-${item.createdAt}-${index}`)}
    ListFooterComponent={
      <ListFooter
        hasNoMore={hasNoMore}
        isLoadingMore={isLoadingMore}
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
  hasNoMore: T.bool,
  isLoadingMore: T.bool,
  onPress: T.func,
};


export default QuestionsList;
