import { StyleSheet } from 'react-native';
import { blue } from '../colorsScheme';

const styles = StyleSheet.create({
  count: {
    flexDirection: 'column',
    alignContent: 'center',
  },
  text: {
    textAlign: 'center',
    width: 100,
    height: 50,
    backgroundColor: blue,
    fontSize: 36,
  },
});

export default styles;
