import React from 'react';
import * as T from 'prop-types';
import { View, Text } from 'react-native';
import s from '../../styles';
import Touchable from '../../components/Touchable';
import { DrawerButton } from '../../components';


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
  headerLeft: (
    <DrawerButton
      onPress={() => navigation.toggleDrawer()}
      onLongPress={() => navigation.toggleDrawer()}
    />
  ),
});

SignUpScreen.propTypes = {
  navigateToSignIn: T.func,
};

export default SignUpScreen;
