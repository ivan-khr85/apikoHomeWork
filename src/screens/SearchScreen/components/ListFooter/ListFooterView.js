import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import T from 'prop-types';
import s from './style';
import { colors } from '../../../../styles';
import { Touchable } from '../../../../components';


const ListItem = ({
  hasNoMore,
  isLoadingMore,
  loadingMoreError,
  getQuestionsMore,
}) => (
  <View style={s.container}>
    {isLoadingMore && <ActivityIndicator
      size="large"
      color={colors.activityIndicatorColor}
    />}
    {hasNoMore && <Text style={s.text}>No more question</Text>}
    {loadingMoreError && (
      <Touchable
        style={s.buttonErr}
        onPress={getQuestionsMore}
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
  getQuestionsMore: T.func,
};


export default ListItem;
