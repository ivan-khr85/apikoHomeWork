import React from 'react';
import Swipeable from 'react-native-swipeable-row';
import { Text } from 'react-native';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import T from 'prop-types';
import s from './style';
import { Touchable } from '../../../../components';


const SearchHistory = ({
  removeItemFromHistory,
  onChange,
  searchHistory,
}) => (
  searchHistory
    .map(({ id, createdAt, searchedValue }) => (
      <Swipeable
        key={id}
        rightButtons={[
          <Touchable style={s.container} onPress={() => removeItemFromHistory(id)}>
            <Ionicons name="ios-close-circle" size={26} style={s.icon} />
          </Touchable>,
        ]}
      >
        <Touchable
          style={[s.container, s.title]}
          onPress={() => onChange('inputValue', searchedValue)}
          useOpacity
        >
          <Text style={s.text}>{searchedValue}</Text>
          <Text style={s.date}>searched{'\n'}{moment(createdAt).format('MMM D ’H')}</Text>
        </Touchable>
      </Swipeable>
    ))
);


SearchHistory.propTypes = {
  removeItemFromHistory: T.func,
  onChange: T.func,
  searchHistory: T.array,
};


export default SearchHistory;
