import React from 'react';
import T from 'prop-types';
import moment from 'moment';
import { View, Text, Image } from 'react-native';
import s from './style';
import { Tags } from '../../../../components';
import userDefault from '../../../../../assets/images/userDefault.png';


const QuestionItem = ({
  question,
  createdAt,
  tags,
  title,
}) => (
  <View style={s.container}>
  
    <View style={s.question}>
      <Text style={s.title}>{title || question.title}</Text>
      <View style={[(tags || question.tags.length) && s.tags]}>
        <Tags tags={tags || question.tags} />
      </View>
    </View>
    <View style={s.descriptionContainer}>
      <Text style={s.descriptionText}>{question.description}</Text>
    </View>

    <View style={s.author}>
      <View style={s.iconContainer}>
        <Image
          source={userDefault}
          style={s.icon}
        />
      </View>
      <View style={s.time}>
        <Text style={s.timeTitle}>asked</Text>
        <Text style={s.timeValue}>
          {moment(createdAt || question.createdAt).startOf('minute').fromNow()}
        </Text>
      </View>
    </View>

  </View>
);

QuestionItem.propTypes = {
  question: T.shape({
    _id: T.string,
    createdAt: T.any,
    createdBy: T.any,
    description: T.string,
    tags: T.array,
    title: T.string,
  }),

  createdAt: T.string,
  tags: T.array,
  title: T.string,

};

export default QuestionItem;
