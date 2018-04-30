import React from 'react';
import { func, string } from 'prop-types';
import {
  TouchableNativeFeedback,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { white, buttonColor } from '../../colorsScheme';

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

const Button = ({ handler, text }) => (
  <View style={styles.view}>
    <TouchableNativeFeedback
      style={styles.button}
      onPress={handler}
    >
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  </View>
);

Button.propTypes = {
  handler: func.isRequired,
  text: string.isRequired,
};

export default Button;
