import React from 'react';
import { Image, View } from 'react-native';
import fullLogo from '../../../assets/images/fullLogo.png';
import s from './style';


const HeaderLogo = () => (
  <View style={s.container}>
    <Image
      source={fullLogo}
      style={s.logo}
    />
  </View>
);


export default HeaderLogo;
