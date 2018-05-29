import React from 'react';
import T from 'prop-types';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import s from './style';
import { headerStyle } from '../../styles';
import Touchable from '../../components/Touchable';
import BackBtn from '../../components/BackBtn/BackBtn';
import { TextInput, ListHeader } from '../../components';
import dimensions from '../../styles/dimensions';

const isAndroid = Platform.OS === 'android';

const SignInScreen = ({
  navigateToRestorePassword,
  signIn,
  email,
  password,
  onChange,
  keyboardShow,
}) => (
  <ScrollView
    contentContainerStyle={s.container}
    scrollEnabled={false}
    keyboardShouldPersistTaps="handled"
  >

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
      {!keyboardShow &&
      <Touchable
        style={s.forgotPassword}
      >
        <Text style={s.textBtn} onPress={navigateToRestorePassword}>Forgot password?</Text>
      </Touchable>}
      
    </View>

    <KeyboardAvoidingView style={s.bottom} behavior="position" enabled={!isAndroid}>
      
      {!(keyboardShow && dimensions.height < 595) &&
      <Touchable
        onPress={signIn}
        style={s.buttonSignIn}
      >
        <Text style={s.signInText}>Sign in</Text>
      </Touchable>}
      
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
  keyboardShow: T.bool,

};


export default SignInScreen;
