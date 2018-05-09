import React from 'react';
import { Feather } from '@expo/vector-icons';
import * as T from 'prop-types';
import Touchable from '../Touchable';
import { colorsScheme } from '../../styles';


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
      color={colorsScheme.mainColor}
      size={35}
    />
  </Touchable>
);

DrawerButtonView.propTypes = {
  onPress: T.func,
  onLongPress: T.func,
};

export default DrawerButtonView;
