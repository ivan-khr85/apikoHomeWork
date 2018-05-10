import React from 'react';
import { Feather } from '@expo/vector-icons';
import * as T from 'prop-types';
import Touchable from '../Touchable';
import { colors } from '../../styles';
import s from './style';


const noop = {};

const DrawerButtonView = ({
  onPress,
  onLongPress,
}) => (
  <Touchable
    onPress={onPress || noop}
    onLongPress={onLongPress || noop}
  >
    <Feather
      name="menu"
      color={colors.mainColor}
      size={35}
      style={s.icon}
    />
  </Touchable>
);

DrawerButtonView.propTypes = {
  onPress: T.func,
  onLongPress: T.func,
};

export default DrawerButtonView;
