import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    height: 450,
    paddingTop: 50,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    paddingTop: 5,
    color: colors.emptyList.description,
  },

  button: {
    backgroundColor: colors.buttonColor,
    marginTop: 15,
    paddingHorizontal: 30,
    paddingVertical: 7,
    borderRadius: 5,
     
  },
  buttonText: {
    color: colors.emptyList.buttonText,

  },

});
