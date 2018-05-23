import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  
  description: {
    
  },
  descriptionContainer: {
    backgroundColor: colors.questionAndAnswer.bgAnswer,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },

  author: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.questionAndAnswer.border,
    paddingHorizontal: 10,
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
