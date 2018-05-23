import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  top: {
    flex: 1,
    // justifyContent: '',
    backgroundColor: colors.questionAndAnswer.bg,
  },
  bottom: {

  },
  inputContainer: {
    backgroundColor: colors.questionAndAnswer.bg,
  },
  input: {
    backgroundColor: colors.signUp.inputBackground,
    borderTopColor: colors.questionAndAnswer.border,
    borderBottomColor: colors.questionAndAnswer.border,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 15,
    borderRadius: 0,
    minHeight: 30,
    
    fontSize: 15,
    lineHeight: 24,
    maxHeight: 4 * 24, // number of lines * lineHeight
  },


});
