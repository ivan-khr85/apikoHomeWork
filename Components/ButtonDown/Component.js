import React from 'react';
import { func } from 'prop-types';

import {
  TouchableNativeFeedback,
  StyleSheet,
  Text,
  View
} from 'react-native';


const ButtonDown = ({ countDown }) => (
  <View style={styles.view}>
    <TouchableNativeFeedback
      style={styles.button}
      onPress={countDown}  >
      <View>
        <Text style={styles.text}>-</Text>
      </View>
    </TouchableNativeFeedback>
  </View>
);

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 36,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
  }
});

ButtonDown.propTypes = {
  countDown: func.isRequired,
};

export default ButtonDown;