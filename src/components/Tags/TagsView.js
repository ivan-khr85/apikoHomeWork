import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './style';


const Tags = ({
  tags,
}) => (
  tags.map((item, index) => (
    <View
      style={s.tagContainer}
      key={`${index}-${item}`} // eslint-disable-line
    >
      <Text style={s.tagText}>{item}</Text>
    </View>
  ))
);

Tags.propTypes = {
  tags: T.array,

};

export default Tags;
