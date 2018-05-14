import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderColor: colors.LogoGray,
    borderWidth: 18,
    zIndex: 1,
  },
  right: {
    backgroundColor: colors.LogoGray,
    height: 70,
    bottom: 32 * 2,
    width: 18,
    left: 56,
    borderRadius: 9,
  },
  animated: {
    width: 0,
    height: 0,
    borderLeftWidth: 45,
    borderLeftColor: colors.transparent,
    borderRightWidth: 45,
    borderRightColor: colors.transparent,
    borderTopWidth: 56,
    borderTopColor: colors.mainColor,
    borderRadius: 45,
    zIndex: -1,
    bottom: 32 * 4.5,
    transform: [{ rotate: '180deg' }],
  },
  text: {
    
  },
});

export default style;
