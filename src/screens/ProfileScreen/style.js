import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.profile.bg,
  },
  headerContainer: {
    paddingHorizontal: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.profile.border,
  },
  userInfo: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.profile.border,
    
  },
  emailContainer: {
    flex: 1,

  },
  iconContainer: {
    width: 65,
    height: 65,
    marginRight: 8,
  },
  icon: {
    resizeMode: 'contain',
    width: 65,
    height: 65,
  },
  username: {
    fontSize: 24,
  },
  email: {
    fontSize: 17,
  },
  questionsTitle: {
    padding: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.profile.border,
    backgroundColor: colors.profile.bgTitle,
  },
  questionsTitleText: {
    fontSize: 15,
    fontWeight: 'bold',
  },

});
