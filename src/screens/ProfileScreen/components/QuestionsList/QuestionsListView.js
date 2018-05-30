import React from 'react';
import { FlatList } from 'react-native';
import T from 'prop-types';
import * as R from 'ramda';
import ListItem from '../ListItem';
import EmptyList from '../EmptyList';
import { Separator, ListFooter } from '../../../../components';


const QuestionsList = ({
  hasNoMore,
  isLoadingMore,
  onPress,
  getQuestionsMore,
  ...props
}) => (
  <FlatList
    {...props}
    ItemSeparatorComponent={() => <Separator />}
    keyExtractor={(item, index) => (`${R.prop('_id')(item)}-${item.createdAt}-${index}`)}
    ListFooterComponent={<ListFooter />}
    ListEmptyComponent={<EmptyList />}
    renderItem={({ item }) => (
      <ListItem
        {...item}
        navigateToQuestion={onPress}
      />
    )}
  />
);

QuestionsList.propTypes = {
  props: T.any,
  hasNoMore: T.bool,
  isLoadingMore: T.bool,
  onPress: T.func,
  getQuestionsMore: T.func,
};


export default QuestionsList;
