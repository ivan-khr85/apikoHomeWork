import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  input: {
    backgroundColor: colors.signUp.inputBackground,
    borderColor: colors.mainColor,
    borderWidth: StyleSheet.hairlineWidth,
    // borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginBottom: 15,
    borderRadius: 5,
    minHeight: 30,
  },

});
