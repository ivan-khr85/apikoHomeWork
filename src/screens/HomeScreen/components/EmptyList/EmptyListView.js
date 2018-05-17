import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './style';
import { Touchable } from '../../../../components';

const ListItem = ({
  signedIn,
  navigateToCreateQuestion,
  navigateSignUp,
}) => (
  <View style={s.container}>
    <Text style={s.title}>No questions yet</Text>
    <Text style={s.description}>No one has asked any question yet.</Text>
    <Touchable
      onPress={
        signedIn ?
          navigateToCreateQuestion :
          navigateSignUp
        }
    >
      <View style={s.button}>
        {signedIn && <Text style={s.buttonText}>Create Question</Text>}
        {!signedIn && <Text style={s.buttonText}>Sign Up to Create Question</Text>}
      </View>
    </Touchable>
  </View>
);


ListItem.propTypes = {
  signedIn: T.bool,
  navigateToCreateQuestion: T.func,
  navigateSignUp: T.func,
};


export default ListItem;
