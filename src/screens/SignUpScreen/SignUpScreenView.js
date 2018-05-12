import React from 'react';
import * as T from 'prop-types';
import { View, Text } from 'react-native';
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
}) => (
  <View style={s.container} >

    <View style={s.top}>

      <ListHeader headerText="Sign up" />

      <TextInput
        value={username}
        onChange={text => onChange('username', text)}
        placeholder=" username"
      />

      <TextInput
        value={email}
        onChange={text => onChange('email', text)}
        placeholder=" email"
        
      />

      <TextInput
        value={password}
        onChange={text => onChange('password', text)}
        placeholder=" password"
        
        secureTextEntry
      />

      <Text style={s.textBtn} onPress={navigateToSignIn}>Already has an{'\n'}account?</Text>

    </View>


    <View style={s.bottom}>
      <Touchable
        // onPress={}
        style={s.buttonSignUp}
      >
        <Text >Sign up</Text>
      </Touchable>
    </View>
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

};

export default SignUpScreen;
