import React from 'react';
import * as T from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import s from './style';
import { Touchable } from '../';


const BackBtn = ({
  navigation,
}) => (
  <Touchable
    onPress={() => navigation.goBack()}
    style={s.container}
    borderless
  >
    <Ionicons
      name="ios-arrow-back"
      size={32}
      style={s.icon}
    />
  </Touchable>
);

BackBtn.propTypes = {
  navigation: T.object,
};

export default BackBtn;
