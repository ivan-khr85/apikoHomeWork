import React from 'react';
import { Image, View } from 'react-native';
import * as T from 'prop-types';
import fullLogo from '../../icon/fullLogo.png';
import s from './style';


const DrawerLogo = ({
  borderBottom,
}) => (
  <View
    style={[
      s.container,
      borderBottom && s.borderBottom,
    ]}
  >
    <Image
      source={fullLogo}
      style={s.logo}
    />
  </View>
);

DrawerLogo.propTypes = {
  borderBottom: T.bool,
};

export default DrawerLogo;
