import React from 'react';
import { func, string } from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { white } from '../../colorsScheme';

const styles = StyleSheet.create({
  view: {
    backgroundColor: white,
  },
  text: {
    fontSize: 36,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    
  },
});

const Button = ({
  handler,
  text,
  onPressIn,
  onPressOut,
}) => (
  <View style={styles.view}>
    <TouchableOpacity
      style={styles.button}
      onPress={handler}
      onPressIn={onPressIn || null}
      onPressOut={onPressOut || null}
    >
      <View>
        <Text style={styles.text}>{text}</Text>
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
