import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './style';

const EmptyList = ({
  title,
  description,
  children,
}) => (
  <View style={s.container}>
    <Text style={s.title}>{title}</Text>
    <Text style={s.description}>{description}</Text>
    {children}
  </View>
);


EmptyList.propTypes = {
  title: T.string,
  description: T.string,
  children: T.any,
};

export default EmptyList;
