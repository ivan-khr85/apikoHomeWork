import React from 'react';
import T from 'prop-types';
import { View, ActivityIndicator } from 'react-native';
import { colors } from '../../styles';
import s from './style';


const Loading = ({
  size = 'large',
  style,
}) => (
  <View style={[s.container, style]}>
    <ActivityIndicator size={size} color={colors.mainColor} />
  </View>
);


Loading.propTypes = {
  size: T.string,
  style: T.any,
};


export default Loading;
