import React from 'react';
import { func, string } from 'prop-types';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import s from './styles';

const Button = ({
  handler,
  text,
  onPressIn,
  onPressOut,
}) => (
  <View style={s.view}>
    <TouchableOpacity
      style={s.button}
      onPress={handler}
      onPressIn={onPressIn || null}
      onPressOut={onPressOut || null}
    >
      <View>
        <Text style={s.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

Button.propTypes = {
  handler: func.isRequired,
  text: string.isRequired,
  onPressIn: func,
  onPressOut: func,
};

export default Button;
