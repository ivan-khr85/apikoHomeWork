import React from 'react';
import { Image, View } from 'react-native';
import fullLogo from '../../icon/fullLogo.png';
import s from './style';


const DrawerLogo = () => (
  <View
    style={s.container}
  >
    <Image
      source={fullLogo}
      style={s.logo}
    />
  </View>
);

export default DrawerLogo;
