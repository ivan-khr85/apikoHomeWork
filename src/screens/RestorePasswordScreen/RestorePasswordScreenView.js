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
  username,
  onChange,
  onSubmit,
}) => (
  <ScrollView contentContainerStyle={s.container} scrollEnabled={false}>

    <View style={s.top}>

      <ListHeader headerText="Restore password" />
      <Text style={s.aboutFormText}>
        We will send you an instruction how to reset your password to your email address.
      </Text>


      <TextInput
        value={username}
        onChangeText={text => onChange('username', text)}
        placeholder=" username"

      />

    </View>

    <KeyboardAvoidingView style={s.bottom} behavior="position" enabled={!isAndroid}>
      <Touchable
        onPress={onSubmit}
        style={s.btnOnSubmit}
      >
        <Text style={s.textOnSubmit}>Send instruction</Text>
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
  username: T.string,
  onChange: T.func,
  onSubmit: T.func,
};


export default SignInScreen;
