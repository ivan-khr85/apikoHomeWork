import React from 'react';
import moment from 'moment';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './style';
import { Tags, Touchable } from '../../../../components';


const ListItem = ({
  createdAt,
  tags = {},
  title,
  _id,
  navigateToQuestion,
}) => {
  const dateCreated = moment(createdAt).format('MMM D ’H');
  return (
    <Touchable
      style={s.container}
      onPress={() => navigateToQuestion(_id)}
      useOpacity
    >
      <View>
        <Text style={s.title}>{title}</Text>
        <View style={[tags && s.tags]}><Tags tags={tags} /></View>
        <Text style={s.date}>asked {dateCreated}</Text>
      </View>
    </Touchable>
  );
};

ListItem.propTypes = {
  createdAt: T.string,
  tags: T.array,
  title: T.string,
  _id: T.string,
  navigateToQuestion: T.func,

};


export default ListItem;
