import React from 'react';
import * as T from 'prop-types';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import s, { colorsScheme } from '../../styles';
import Touchable from '../../components/Touchable';

const SignUpScreen = ({
  navigateToSignIn,
}) => (
  <View style={s.align} >
    <Text>Sign Up Screen</Text>
    <Text />
    <Touchable
      onPress={navigateToSignIn}
      style={s.button}
    >
      <Text>Sign In</Text>
    </Touchable>
  </View>
);

SignUpScreen.navigationOptions = ({ navigation }) => ({
  title: 'Sign up',
  headerLeft: <Feather
    name="menu"
    color={colorsScheme.mainColor}
    size={35}
    onPress={() => navigation.toggleDrawer()}
  />,
});

SignUpScreen.propTypes = {
  navigateToSignIn: T.func,
};

export default SignUpScreen;
