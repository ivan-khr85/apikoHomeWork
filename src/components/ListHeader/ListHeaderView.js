import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './style';

const Header = ({
  headerText,
}) => (
  <View style={s.style}>
    <Text
      style={s.text}
    >
      {headerText}
    </Text>
  </View>
);

Header.propTypes = {
  headerText: T.string,

};

export default Header;
