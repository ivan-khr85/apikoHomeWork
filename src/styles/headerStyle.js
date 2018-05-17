import React from 'react';
import TitleLogo from '../components/TitleLogo';
import colors from './colors';

const headerStyle = {
  headerStyle: {
    backgroundColor: colors.headerColor,
    borderBottomWidth: 0,
    elevation: 0,
  },
  headerTitle: <TitleLogo />,
};

export default headerStyle;
