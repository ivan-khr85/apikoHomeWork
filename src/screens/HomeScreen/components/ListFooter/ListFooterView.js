import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import T from 'prop-types';
import s from './style';
import { colors } from '../../../../styles';


const ListItem = ({
  hasNoMore,
  isLoadingMore,
}) => (
  <View style={s.container}>
    {isLoadingMore && <ActivityIndicator
      size="large"
      color={colors.activityIndicatorColor}
    />}
    {hasNoMore && <Text style={s.text}>No more question</Text>}
  </View>
);


ListItem.propTypes = {
  hasNoMore: T.bool,
  isLoadingMore: T.bool,
};


export default ListItem;
