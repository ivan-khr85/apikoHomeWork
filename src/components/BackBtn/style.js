import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  icon: {
    marginHorizontal: 4,
    color: colors.mainColor,
  },
  title: {
    color: colors.mainColor,
    fontSize: 15,
    fontWeight: 'bold',
  },

});

