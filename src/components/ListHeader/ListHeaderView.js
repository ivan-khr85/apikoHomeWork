import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './style';

const Header = ({
  headerText,
  styleText,
  styleContainer,
}) => (
  <View style={[s.container, styleContainer]}>
    <Text style={[s.text, styleText]}>
      {headerText}
    </Text>
  </View>
);

Header.propTypes = {
  headerText: T.string,
  styleText: T.any,
  styleContainer: T.any,

};

export default Header;
