import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.questionAndAnswer.border,
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
  },
  countText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  orderText: {
    textAlign: 'right',
  },
  
});
