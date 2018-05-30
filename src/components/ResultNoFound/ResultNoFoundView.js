import React from 'react';
import { View, Text } from 'react-native';
// import T from 'prop-types';
import s from './style';


const ResultNoFound = () => (
  <View style={s.container}>
    <Text style={s.title}>Result no found</Text>
  </View>
);


ResultNoFound.propTypes = {

};


export default ResultNoFound;
