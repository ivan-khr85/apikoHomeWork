import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { number, func } from 'prop-types';
import Button from '../components/Button';
import { black, blue } from '../colorsScheme';


const styles = StyleSheet.create({
  count: {
    flexDirection: 'column',
    alignContent: 'center',
  },
  text: {
    textAlign: 'center',
    borderColor: black,
    borderWidth: 0.5,
    width: 100,
    height: 50,
    backgroundColor: blue,
    fontSize: 36,
  },
});

const Home = ({
  countValue,
  countUp,
  countDown,
}) => (
  <View style={styles.count}>
    <Button handler={countUp} text="+" />
    <Text style={styles.text}>{countValue}</Text>
    <Button handler={countDown} text="-" />
  </View>
);

export default Home;

Home.propTypes = {
  countValue: number.isRequired,
  countUp: func.isRequired,
  countDown: func.isRequired,
};
