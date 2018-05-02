import React from 'react';
import { Text, View } from 'react-native';
import { number, func } from 'prop-types';
import Button from '../../components/Button';
import s from './styles';

const Home = ({
  countValue,
  countUp,
  countDown,
}) => (
  <View style={s.count}>
    <Button handler={countUp} text="+" />
    <Text style={s.text}>{countValue}</Text>
    <Button handler={countDown} text="-" />
  </View>
);

export default Home;

Home.propTypes = {
  countValue: number.isRequired,
  countUp: func.isRequired,
  countDown: func.isRequired,
};
