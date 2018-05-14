import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.signUp.background,
    justifyContent: 'space-between',
  },

  top: {
    flex: 1,
    paddingHorizontal: 16,

  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  btnOnSubmit: {
    backgroundColor: colors.buttonColor,
    paddingHorizontal: 30,
    marginBottom: 42,
    paddingVertical: 10,
    borderRadius: 5,
  },
  textOnSubmit: {
    color: colors.restorePassword.btnText,
  },
  aboutFormText: {
    color: colors.restorePassword.aboutFormText,
    paddingHorizontal: 5,
    paddingBottom: 20,
  },


});
