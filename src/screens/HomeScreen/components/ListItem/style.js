import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  date: {
    color: colors.userQuestions.textCreatedAt,
    paddingTop: 8,
    fontSize: 13,
  },
  tags: {
    flex: 1,
    paddingTop: 8,
    flexDirection: 'row',
  },

});
