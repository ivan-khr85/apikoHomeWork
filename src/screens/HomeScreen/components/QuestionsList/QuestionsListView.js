import React from 'react';
import { FlatList } from 'react-native';
import T from 'prop-types';
import * as R from 'ramda';
import ListItem from '../ListItem';
import { Separator, ListHeader } from '../../../../components';
import s from './style';

const QuestionsList = ({
  data,
  onEndReachedThreshold,
  onEndReached,
}) => (
  <FlatList
    data={data}
    ListHeaderComponent={() => (
      <ListHeader
        headerText="User questions"
        styleContainer={s.headerContainer}
        styleText={s.headerText}
      />
    )}
    ItemSeparatorComponent={() => <Separator />}
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
