import React from 'react';
import * as T from 'prop-types';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import s from './style';
import { Touchable } from '../';


const BackBtn = ({
  navigation,
  title,
}) => (
  <View style={s.container}>
    <Touchable
      onPress={() => navigation.pop()}
      style={s.button}
      borderless
    >
      <Ionicons
        name="ios-arrow-back"
        size={32}
        style={s.icon}
      />
      <Text style={s.title}>{title}</Text>
    </Touchable>
  </View>
);

BackBtn.propTypes = {
  navigation: T.any,
  title: T.string,
};

export default BackBtn;
