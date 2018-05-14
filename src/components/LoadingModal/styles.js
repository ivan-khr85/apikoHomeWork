import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';

const style = StyleSheet.create({
  container: {

  },
  circle: {
    position: 'absolute',
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderColor: colors.LogoGray,
    borderWidth: 18,
    zIndex: 1,
  },
  right: {

  },
  animated: {
    position: 'absolute',
    right: dimensions.width / 2,
    width: 0,
    height: 0,
    borderLeftWidth: 45,
    borderLeftColor: colors.transparent,
    borderRightWidth: 45,
    borderRightColor: colors.transparent,
    borderTopWidth: 56,
    borderTopColor: colors.white,
    borderRadius: 45,
    zIndex: -1,
  },
});

export default style;
