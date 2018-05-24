import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { colors } from '../../../../styles';
// import T from 'prop-types';
import s from './style';


const Loading = () => (
  <View style={s.container}>
    <ActivityIndicator size="large" color={colors.mainColor} />
  </View>
);


Loading.propTypes = {

};


export default Loading;
