import React from 'react';
import HeaderLogo from '../components/HeaderLogo';
import colors from './colors';


const headerStyle = {
  headerStyle: {
    backgroundColor: colors.headerColor,
    borderBottomWidth: 0,
    elevation: 0,
  },
  headerTitle: <HeaderLogo />,
};

export default headerStyle;
