import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './style';
import { Touchable } from '../../../../components';

const LoadingError = ({
  getQuestions,
}) => (
  <View style={s.container}>
    <Text style={s.description}>Error while loading questions.</Text>
    <Touchable
      onPress={getQuestions}
    >
      <View style={s.button}>
        <Text style={s.buttonText}>Try again</Text>
      </View>
    </Touchable>
  </View>
);


LoadingError.propTypes = {
  getQuestions: T.func,
};


export default LoadingError;
