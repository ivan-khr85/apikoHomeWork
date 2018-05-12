import React from 'react';
import { TextInput } from 'react-native';
import T from 'prop-types';
import { colors } from '../../styles';
import s from './style';


const TextInputView = ({
  value,
  onChange,
  secureTextEntry,
  placeholder,
}) => (
  <TextInput
    value={value}
    onChange={onChange}
    style={s.input}
    secureTextEntry={secureTextEntry}
    underlineColorAndroid="transparent"
    selectionColor={colors.mainColor}
    placeholder={placeholder}
  />
);


TextInputView.propTypes = {
  value: T.string,
  onChange: T.func,
  secureTextEntry: T.bool,
  placeholder: T.string,

};

export default TextInputView;
