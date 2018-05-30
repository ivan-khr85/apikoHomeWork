import { StyleSheet } from 'react-native';
import { dimensions } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: dimensions.height / 2.5,
    paddingBottom: 45,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },

});
