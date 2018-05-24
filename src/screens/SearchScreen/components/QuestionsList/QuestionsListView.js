import React from 'react';
import { FlatList } from 'react-native';
import T from 'prop-types';
import * as R from 'ramda';
import ListItem from '../ListItem';
import ListFooter from '../ListFooter';
import { Separator } from '../../../../components';
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
    renderItem={({ item }) => (
      <ListItem
        {...item}
        onPress={onPress}
      />
    )}

  />
);

QuestionsList.propTypes = {
  props: T.any,
  hasNoMore: T.bool,
  isLoadingMore: T.bool,
  onPress: T.func,
};


export default QuestionsList;
