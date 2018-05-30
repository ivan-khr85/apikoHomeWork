import { StyleSheet } from 'react-native';
import { dimensions } from '../../styles';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    marginLeft: (dimensions.width / 2) - (105 / 2) - 51,
    justifyContent: 'center',
    alignItems: 'center',

  },
  
  logo: {
    resizeMode: 'contain',
    width: 105,
  },
});
