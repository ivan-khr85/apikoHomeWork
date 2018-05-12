import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  input: {
    backgroundColor: colors.signUp.inputBackground,
    borderColor: colors.mainColor,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 6,
    marginBottom: 15,
    borderRadius: 5,
    height: 34,
  },

});
