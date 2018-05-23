import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import * as R from 'ramda';
import s from './style';

const QuestionsList = ({
  countAnswer,
  orderBy,
}) => (
  <View style={s.container}>
    <View style={s.left}>
      {countAnswer < 1 && <Text style={s.countText}>{countAnswer} Answer</Text>}
      {countAnswer > 1 && <Text style={s.countText}>{countAnswer} Answers</Text>}
    </View>

    <View style={s.right}>
      <Text style={s.orderText}>order by ...</Text>
    </View>
  </View>
);

QuestionsList.propTypes = {
  countAnswer: T.number,
  orderBy: T.string,
};


export default QuestionsList;
