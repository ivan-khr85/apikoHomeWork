import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.questionAndAnswer.bg,
  },
  top: {
    flex: 1,
  },
  
  bottom: {
    justifyContent: 'flex-end',
  },

  inputContainer: {

  },
  input: {
    backgroundColor: colors.signUp.inputBackground,
    borderTopColor: colors.questionAndAnswer.border,
    borderBottomColor: colors.questionAndAnswer.border,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,

    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 8,
    borderRadius: 0,
    minHeight: 30,
    
    fontSize: 15,
    lineHeight: 24,
    maxHeight: 4 * 24, // number of lines * lineHeight
  },

  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: colors.buttonColor,
    marginBottom: 10,
  },
  btnText: {
    color: colors.questionAndAnswer.btnText,
  },

  signedOut: {
    marginTop: 10,
  },

});
