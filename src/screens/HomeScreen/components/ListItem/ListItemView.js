import React from 'react';
import moment from 'moment';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './style';
import { Touchable } from '../../../../components';
import Tag from './Tag';

const ListItem = ({
  createdAt,
  // description,
  tags,
  title,
  _id,
  onPress,
}) => {
  const dateCreated = moment(createdAt).format('MMM D ’H');
  return (
    <Touchable
      style={s.container}
      onPress={() => onPress(_id)}
      useOpacity
    >
      <View>
        <Text style={s.title}>{title}</Text>
        <View style={[tags.length && s.tags]}><Tag tags={tags} /></View>
        <Text style={s.date}>asked {dateCreated}</Text>
      </View>
    </Touchable>
  );
};

ListItem.propTypes = {
  createdAt: T.string,
  description: T.string,
  tags: T.array,
  title: T.string,
  _id: T.string,
  onPress: T.func,

};


export default ListItem;
