import React from 'react';
import { View, Text } from 'react-native';
// import T from 'prop-types';
import s from './style';


const ListItem = () => (
  <View style={s.container}>
    <Text style={s.title}>No searches yet</Text>
    <Text style={s.description}>The search query will appear here.</Text>
    <Text style={s.description}>You can use they to search again.</Text>    
  </View>
);


ListItem.propTypes = {

};


export default ListItem;
