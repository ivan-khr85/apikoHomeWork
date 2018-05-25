import React from 'react';
import { FlatList } from 'react-native';
import T from 'prop-types';
import * as R from 'ramda';
import ListItem from '../ListItem';
import ListFooter from '../ListFooter';
import { Separator } from '../../../../components';
// import s from './style';

const QuestionsList = ({
  hasNoMore,
  isLoadingMore,
  navigateToQuestion,
  hideData,
  ...props
}) => (
  <FlatList
    {...props}
    ItemSeparatorComponent={() => <Separator />}
    keyExtractor={(item, index) => (`${R.prop('_id')(item)}-${item.createdAt}-${index}`)}
    ListFooterComponent={() => (hideData ? null
      : (<ListFooter
        hasNoMore={hasNoMore}
        isLoadingMore={isLoadingMore}
      />)
    )}
    renderItem={({ item }) => (
      <ListItem
        {...item}
        navigateToQuestion={navigateToQuestion}
      />
    )}

  />
);

QuestionsList.propTypes = {
  props: T.any,
  hasNoMore: T.bool,
  isLoadingMore: T.bool,
  navigateToQuestion: T.func,
  hideData: T.bool,
};


export default QuestionsList;
