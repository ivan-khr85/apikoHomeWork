import React from 'react';
import T from 'prop-types';
import { View, Text } from 'react-native';
import s from './style';
import { headerStyle } from '../../styles';
import Touchable from '../../components/Touchable';
import BackBtn from '../../components/BackBtn/BackBtn';
import { TextInput, ListHeader } from '../../components';


const SignInScreen = ({
  navigateToRestorePassword,
  signIn,
  email,
  password,
  onChange,
  
}) => (
  <View style={s.container}>

    <View style={s.top}>

      <ListHeader headerText="Sign in" />


      <TextInput
        value={email}
        onChangeText={text => onChange('email', text)}
        placeholder=" email"

      />

      <TextInput
        value={password}
        onChangeText={text => onChange('password', text)}
        placeholder=" password"

        secureTextEntry
      />

      <Text style={s.textBtn} onPress={navigateToRestorePassword}>Forgot password?</Text>

    </View>

    <View style={s.bottom}>
      <Touchable
        onPress={signIn}
        style={s.buttonSignIn}
      >
        <Text style={s.signInText}>Sign in</Text>
      </Touchable>
    </View>
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
  onChange: T.func,
  email: T.string,
  password: T.string,
  signIn: T.func,

};


export default SignInScreen;
