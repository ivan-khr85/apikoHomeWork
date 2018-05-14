import React from 'react';
import { TextInput } from 'react-native';
import T from 'prop-types';
import { colors } from '../../styles';
import s from './style';


const TextInputView = ({
  value,
  onChangeText,
  secureTextEntry,
  placeholder,
}) => (
  <TextInput
    value={value}
    onChangeText={onChangeText}
    style={s.input}
    secureTextEntry={secureTextEntry}
    underlineColorAndroid="transparent"
    selectionColor={colors.mainColor}
    placeholder={placeholder}
  />
);


TextInputView.propTypes = {
  value: T.string,
  onChangeText: T.func,
  secureTextEntry: T.bool,
  placeholder: T.string,

};

export default TextInputView;
