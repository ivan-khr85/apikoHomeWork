import React from 'react';
import { View, Text } from 'react-native';
// import T from 'prop-types';
import s from './style';

const ListItem = () => (
  <View style={s.container}>
    <Text style={s.title}>No answers yet</Text>
    <Text style={s.description}>No one has answered for this question yet.</Text>
  </View>
);


ListItem.propTypes = {

};


export default ListItem;
