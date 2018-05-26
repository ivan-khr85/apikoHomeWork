import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import T from 'prop-types';
import s from './style';
import { colors } from '../../styles';
import Touchable from '../Touchable';


const ListItem = ({
  hasNoMore,
  isLoadingMore,
  loadingMoreError,
  onError,
  textFooter,
  styleContainer,
}) => (
  <View style={[s.container, styleContainer]}>
    {isLoadingMore && <ActivityIndicator
      size="large"
      color={colors.activityIndicatorColor}
    />}
    {hasNoMore && <Text style={s.text}>{textFooter}</Text>}
    {loadingMoreError && (
      <Touchable
        style={s.buttonErr}
        onPress={onError}
      >
        <Text style={s.buttonErrText}>Try again</Text>
      </Touchable>
    )}
  </View>
);


ListItem.propTypes = {
  hasNoMore: T.bool,
  isLoadingMore: T.bool,
  loadingMoreError: T.any,
  onError: T.func,
  textFooter: T.string,
  styleContainer: T.any,
};


export default ListItem;
