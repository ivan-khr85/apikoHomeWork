import React from 'react';
import moment from 'moment';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './style';
import { Touchable } from '../../../../components';
import Tag from './Tag';

const ListItem = ({
  createdAt,
  description,
  tags,
  title,
  id,
}) => {
  const dateCreated = moment(createdAt).format('ddd, MMM D, YYYY');
  return (
    <Touchable style={s.container}>
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
  id: T.string,

};


export default ListItem;
