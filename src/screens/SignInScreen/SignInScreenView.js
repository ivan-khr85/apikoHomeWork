import React from 'react';
import * as T from 'prop-types';
import { View, Text } from 'react-native';
import { globalStyles, headerStyle } from '../../styles';
import Touchable from '../../components/Touchable';
import BackBtn from '../../components/BackBtn/BackBtn';

const SignInScreen = ({
  navigateToRestorePassword,
  navigateToAuth,
}) => (
  <View style={globalStyles.align}>
    <Touchable
      onPress={navigateToAuth}
      style={globalStyles.button}
        
    >
      <Text>Sign In</Text>
    </Touchable>
    
    <Text />
    
    <Touchable
      onPress={navigateToRestorePassword}
      style={globalStyles.button}
    >
      <Text>Forgot password?</Text>
    </Touchable>
    
  </View>
);

SignInScreen.navigationOptions = ({ navigation }) => ({
  ...headerStyle,
  headerLeft: (
    <BackBtn navigation={navigation} />
  ),
});

SignInScreen.propTypes = {
  navigateToRestorePassword: T.func,
  navigateToAuth: T.func,
};


export default SignInScreen;
