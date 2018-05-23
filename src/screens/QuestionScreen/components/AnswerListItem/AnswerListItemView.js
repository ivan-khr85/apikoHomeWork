import React from 'react';
import moment from 'moment';
import { View, Text, Image } from 'react-native';
import T from 'prop-types';
import s from './style';
import userDefault from '../../../../../assets/images/userDefault.png';


const ListItem = ({
  createdAt,
  _id,
  questionId,
  description,
  createdById,
}) => (
  <View style={s.container}>
    <View style={s.descriptionContainer}>
      <Text style={s.description}>{description}</Text>
    </View>
    <View style={s.author}>
      <View style={s.iconContainer}>
        <Image
          source={userDefault}
          style={s.icon}
        />
      </View>
      <View style={s.time}>
        <Text style={s.timeTitle}>answered</Text>
        <Text style={s.timeValue}>{moment(createdAt).startOf('hour').fromNow()}</Text>
      </View>
    </View>
  </View>
);

ListItem.propTypes = {
  createdAt: T.string,
  _id: T.string,
  questionId: T.string,
  description: T.string,
  createdById: T.string,
};


export default ListItem;
