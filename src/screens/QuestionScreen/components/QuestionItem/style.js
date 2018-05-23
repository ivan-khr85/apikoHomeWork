import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

export default StyleSheet.create({
  container: {
    paddingTop: 8,
    backgroundColor: colors.questionAndAnswer.backgroundQuestion,
  },
  question: {
    borderBottomColor: colors.questionAndAnswer.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    paddingHorizontal: 12,
    fontSize: 28,
    paddingBottom: 8,
  },
  tags: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  descriptionContainer: {
    backgroundColor: colors.questionAndAnswer.backgroundDescription,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomColor: colors.questionAndAnswer.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  descriptionText: {
    fontSize: 15,
  },
  author: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    borderBottomColor: colors.questionAndAnswer.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 8,
  },
  iconContainer: {
    width: 30,
    height: 30,
  },
  icon: {
    resizeMode: 'contain',
    height: 30,
    width: '100%',
  },
  timeTitle: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
  timeValue: {
    textAlign: 'right',
  },


});
