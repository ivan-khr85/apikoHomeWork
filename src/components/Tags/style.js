import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  tagContainer: {
    paddingRight: 8,
  },
  tagText: {
    backgroundColor: colors.userQuestions.tagsBackground,
    color: colors.userQuestions.tagText,
    paddingHorizontal: 4,
    fontSize: 13,
  },

});
