import React from 'react';
import { FlatList } from 'react-native';
import T from 'prop-types';
import * as R from 'ramda';
import ListItem from '../ListItem';


const QuestionsList = ({
  data,
  onEndReachedThreshold,
  onEndReached,
}) => (
  <FlatList
    data={data}
    keyExtractor={R.prop('_id')}
    onEndReachedThreshold={onEndReachedThreshold}
    onEndReached={onEndReached}
    renderItem={({ item }) => (
      <ListItem
        createdAt={item.createdAt}
        description={item.description}
        tags={item.tags}
        title={item.title}
        id={item._id}
      />
    )}
  />
);

QuestionsList.propTypes = {
  data: T.array,
  onEndReachedThreshold: T.number,
  onEndReached: T.func,
};


export default QuestionsList;
