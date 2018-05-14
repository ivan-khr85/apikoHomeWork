import React from 'react';
import * as T from 'prop-types';
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import { headerStyle } from '../../styles';
import s from './style';
import Touchable from '../../components/Touchable';
import { DrawerButton, TextInput, ListHeader } from '../../components';


const SignUpScreen = ({
  navigateToSignIn,
  onChange,
  username,
  email,
  password,
  signUp,
}) => (

  <View style={s.container}>
    {/* <ScrollView scrollEnabled={false} contentContainerStyle={s.container} > */}

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

        <Text style={s.textBtn} onPress={navigateToSignIn}>Already has an{'\n'}account?</Text>

      </View>

      <View style={s.bottom}>
        <Touchable
          onPress={signUp}
          style={s.buttonSignUp}
        >
          <Text style={s.buttonSignUpText}>Sign up</Text>
        </Touchable>
      </View>
    {/* </ScrollView> */}
  </View>
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

};

export default SignUpScreen;
