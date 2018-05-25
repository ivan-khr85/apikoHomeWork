import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.searchScreen.border,
  },
  title: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: colors.searchScreen.border,
  },
  text: {
    flex: 1,
    fontSize: 15,
  },
  date: {
    color: colors.searchScreen.date,
    fontSize: 13,
  },
  icon: {
    marginLeft: 8,
    color: colors.searchScreen.btn,
  },

});
