import React from 'react';
import * as T from 'prop-types';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { headerStyle } from '../../styles';
import s from './style';
import Touchable from '../../components/Touchable';
import { DrawerButton, TextInput, ListHeader } from '../../components';

const isAndroid = Platform.OS === 'android';


const SignUpScreen = ({
  navigateToSignIn,
  onChange,
  username,
  email,
  password,
  signUp,
  keyboardShow,
}) => (

  <ScrollView contentContainerStyle={s.container} scrollEnabled={false} keyboardShouldPersistTaps="handled">

    <View style={s.top}>

      <ListHeader headerText="Sign up" />

      <TextInput
        value={username}
        onChangeText={text => onChange('username', text)}
        placeholder=" username"

      />

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
      {!keyboardShow && <Touchable
        style={s.navigateToSignIn}
      >
        <Text style={s.textBtn} onPress={navigateToSignIn}>Already has an{'\n'}account?</Text>
      </Touchable>}

    </View>
    <KeyboardAvoidingView style={s.bottom} behavior="position" enabled={!isAndroid}>
      <Touchable
        onPress={signUp}
        style={s.buttonSignUp}
      >
        <Text style={s.signUpText}>Sign up</Text>
      </Touchable>
    </KeyboardAvoidingView>
  </ScrollView>
);

SignUpScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: (
    <DrawerButton
      onPress={() => navigation.toggleDrawer()}
      onLongPress={() => navigation.toggleDrawer()}
    />
  ),
  ...headerStyle,
});

SignUpScreen.propTypes = {
  navigateToSignIn: T.func,
  onChange: T.func,
  username: T.string,
  email: T.string,
  password: T.string,
  signUp: T.func,
  keyboardShow: T.bool,

};

export default SignUpScreen;
