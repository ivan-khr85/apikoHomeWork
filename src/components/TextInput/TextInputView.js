import React from 'react';
import { TextInput } from 'react-native';
import T from 'prop-types';
import { colors } from '../../styles';
import s from './style';


const TextInputView = ({
  style,
  ...props
}) => (
  <TextInput
    style={style || s.input}
    underlineColorAndroid="transparent"
    selectionColor={colors.mainColor}
    {...props}
  />
);


TextInputView.propTypes = {
  style: T.any,
  props: T.any,
};

export default TextInputView;
