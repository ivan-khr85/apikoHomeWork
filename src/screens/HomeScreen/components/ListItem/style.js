import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  date: {
    color: colors.userQuestions.textCreatedAt,
    paddingTop: 7,
    paddingBottom: 5,
  },
  tags: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
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
