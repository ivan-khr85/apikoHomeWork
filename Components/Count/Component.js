import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { number } from 'prop-types';
import ButtonDown from '../ButtonDown';
import ButtonUp  from '../ButtonUp';



const Count = ({ count }) => (
  <View style={styles.count}>
    <ButtonUp />
    <Text style={styles.text}>{count}</Text>
    <ButtonDown />
  </View>
);


const styles = StyleSheet.create({
  count: {
    flexDirection: 'column',
    alignContent: 'center'
  },
  text: {
    textAlign: 'center',
    width: 100,
    height: 50,
    backgroundColor: '#0080BB',
    fontSize: 36,
  }
});


export default Count;

Count.propTypes = {
  count: number.isRequired,
};