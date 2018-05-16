import React from 'react';
import T from 'prop-types';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import s from './style';
import { headerStyle } from '../../styles';
import Touchable from '../../components/Touchable';
import BackBtn from '../../components/BackBtn/BackBtn';
import { TextInput, ListHeader } from '../../components';

const isAndroid = Platform.OS === 'android';

const SignInScreen = ({
  navigateToRestorePassword,
  signIn,
  email,
  password,
  onChange,
  
}) => (
  <ScrollView contentContainerStyle={s.container} scrollEnabled={false}>

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
      <Touchable
        style={s.forgotPassword}
      >
        <Text style={s.textBtn} onPress={navigateToRestorePassword}>Forgot password?</Text>
      </Touchable>
    </View>

    <KeyboardAvoidingView style={s.bottom} behavior="position" enabled={!isAndroid}>
      <Touchable
        onPress={signIn}
        style={s.buttonSignIn}
      >
        <Text style={s.signInText}>Sign in</Text>
      </Touchable>
    </KeyboardAvoidingView>
  </ScrollView>
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
