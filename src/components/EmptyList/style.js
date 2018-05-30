import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    height: dimensions.height / 2.5,    
    paddingTop: 50,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    paddingTop: 5,
    color: colors.emptyList.description,
  },


});
