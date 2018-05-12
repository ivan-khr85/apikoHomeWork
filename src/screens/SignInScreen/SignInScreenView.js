import React from 'react';
import * as T from 'prop-types';
import { View, Text } from 'react-native';
import s from '../../styles';
import Touchable from '../../components/Touchable';

const SignInScreen = ({
  navigateToRestorePassword,
  navigateToAuth,
}) => (
  <View style={s.align}>
    <Touchable
      onPress={navigateToAuth}
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
  navigateToAuth: T.func,
};


export default SignInScreen;
