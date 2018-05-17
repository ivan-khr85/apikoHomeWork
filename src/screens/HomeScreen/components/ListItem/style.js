import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  date: {
    color: colors.userQuestions.textCreatedAt,
    paddingTop: 8,
  },
  tags: {
    flex: 1,
    paddingTop: 8,
    flexDirection: 'row',
  },
  tagContainer: {
    paddingRight: 8,
  },
  tagText: {
    backgroundColor: colors.userQuestions.tagsBackground, 
    color: colors.userQuestions.tagText,
    paddingHorizontal: 4,
  },


});
