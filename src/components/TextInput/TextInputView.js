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
  blurOnSubmit,
}) => (
  <TextInput
    value={value}
    onChangeText={onChangeText}
    style={s.input}
    secureTextEntry={secureTextEntry}
    underlineColorAndroid="transparent"
    selectionColor={colors.mainColor}
    placeholder={placeholder}
    blurOnSubmit={blurOnSubmit}
  />
);


TextInputView.propTypes = {
  value: T.string,
  onChangeText: T.func,
  secureTextEntry: T.bool,
  placeholder: T.string,
  blurOnSubmit: T.bool,
};

export default TextInputView;
