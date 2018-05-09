import React from 'react';
import { View, Text } from 'react-native';
import s from '../../styles';

const RestorePasswordScreen = () => (
  <View style={s.align}>
    <Text>Restore Password Screen</Text>
  </View>
);

RestorePasswordScreen.navigationOptions = {
  title: 'Restore password',
};


export default RestorePasswordScreen;
