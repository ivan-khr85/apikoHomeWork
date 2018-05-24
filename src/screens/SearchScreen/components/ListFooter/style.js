import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
    paddingBottom: 40,
  },
  text: {
    textAlign: 'center',
  },

  buttonErr: {
    backgroundColor: colors.buttonColor,
    width: 80,
    height: 35,
    paddingVertical: 7,
    borderRadius: 5,
  },

  buttonErrText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.tryAgain.textColor,
  },


});
