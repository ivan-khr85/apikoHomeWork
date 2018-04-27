import React from 'react';

import {
  TouchableNativeFeedback,
  StyleSheet,
  Text,
  View
} from 'react-native';


const ButtonDown = ({ countUp }) => (
  <View style={styles.view}>
    <TouchableNativeFeedback
      style={styles.button}
      onPress={countUp}  >

      <Text style={styles.text}>+</Text>

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

export default ButtonDown;