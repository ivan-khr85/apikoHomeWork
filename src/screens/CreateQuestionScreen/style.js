import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.createQuestion.bg,
  },
  headerContainer: {
    paddingHorizontal: 8,
    backgroundColor: colors.createQuestion.bgHeaderContainer,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.createQuestion.border,
  },
  inputContainer: {
    padding: 8,
  },
  input: {
    
  },
  inputTitle: {
    fontWeight: 'bold',
  },
  textBtn: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  textBtnActive: {
    color: colors.createQuestion.btnActive,
  },
  btnContainer: {
    marginRight: 8,
    padding: 4,
  },

});
