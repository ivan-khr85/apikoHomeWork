import React from 'react';
import { View, Text } from 'react-native';
import s, { headerStyle } from '../../styles';
import BackBtn from '../../components/BackBtn/BackBtn';

const RestorePasswordScreen = () => (
  <View style={s.align}>
    <Text>Restore Password Screen</Text>
  </View>
);

RestorePasswordScreen.navigationOptions = ({ navigation }) => ({
  ...headerStyle,
  headerLeft: (
    <BackBtn navigation={navigation} />
  ),
});


export default RestorePasswordScreen;
