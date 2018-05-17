import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',

  },

  date: {
    color: colors.userQuestions.textCreatedAt,
    paddingTop: 12,
  },
  tags: {
    flex: 1,
    paddingTop: 5,
    flexDirection: 'row',
  },
  tagContainer: {
    paddingRight: 6,
  },
  tagText: {
    backgroundColor: colors.userQuestions.tagsBackground, 
    color: colors.userQuestions.tagText,
    paddingHorizontal: 4,
  },


});
