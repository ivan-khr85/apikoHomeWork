import React from 'react';
import Swipeable from 'react-native-swipeable-row';
import { Text } from 'react-native';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import T from 'prop-types';
import s from './style';
import { Touchable } from '../../../../components';


const SearchHistory = ({
  searchedValue = 'title',
  createdAt,
  onChange,
}) => {
  const rightButtons = [
    <Touchable style={s.container} onPress={() => {}}><Ionicons name="ios-close-circle" size={26} style={s.icon} /></Touchable>,
  ];
  const dateCreated = moment(createdAt).format('MMM D ’H');
  return (
    <Swipeable rightButtons={rightButtons}>
      <Touchable
        style={[s.container, s.title]}
        onPress={() => onChange('inputValue', searchedValue)}
        useOpacity
      >
        <Text style={s.text}>{searchedValue}</Text>
        <Text style={s.date}>searched{'\n'}{dateCreated}</Text>
      </Touchable>
    </Swipeable>
  );
};

SearchHistory.propTypes = {
  onChange: T.func,
  searchedValue: T.string,
  createdAt: T.string,
};


export default SearchHistory;
