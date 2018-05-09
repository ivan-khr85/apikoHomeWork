import React from 'react';
import * as T from 'prop-types';
import { View, Text } from 'react-native';
import s from '../../styles';
import Touchable from '../../components/Touchable';

const SignInScreen = ({
  navigateToRestorePassword,
  navigateToSignIn,
}) => (
  <View style={s.align}>
    <Touchable
      onPress={navigateToSignIn}
      style={s.button}
        
    >
      <Text>Sign In</Text>
    </Touchable>
    
    <Text />
    
    <Touchable
      onPress={navigateToRestorePassword}
      style={s.button}
    >
      <Text>Forgot password?</Text>
    </Touchable>
    
  </View>
);

SignInScreen.navigationOptions = {
  title: 'Sign in',
};

SignInScreen.propTypes = {
  navigateToRestorePassword: T.func,
  navigateToSignIn: T.func,
};


export default SignInScreen;
