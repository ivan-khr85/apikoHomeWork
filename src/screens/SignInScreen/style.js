import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.signIn.background,
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

  buttonSignIn: {
    backgroundColor: colors.buttonColor,
    paddingHorizontal: 30,
    marginBottom: 42,
    paddingVertical: 10,
    borderRadius: 5,
  },
  signInText: {
    color: colors.signIn.textSignIn,
  },
  textBtn: {
    textAlign: 'center',
    color: colors.signIn.text,
  },
  forgotPassword: {
    flexBasis: 'auto',
  },


});
