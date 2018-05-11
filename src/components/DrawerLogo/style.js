import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 38,
    paddingHorizontal: 35,
  },
  
  logo: {
    resizeMode: 'contain',
    width: '100%',
  },

  borderBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.separator.border,
  },
});
