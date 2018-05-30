import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './style';
import { Touchable, EmptyList, LoadingIndicator } from '../../../../components';


const ListItem = ({
  signedIn,
  navigateToCreateQuestion,
  navigateSignUp,
  isLoading,
}) => (
  <EmptyList
    title="No questions yet"
    description="No one has asked any question yet."
  >
    {isLoading && <LoadingIndicator />}
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
  </EmptyList>
);

ListItem.propTypes = {
  signedIn: T.bool,
  navigateToCreateQuestion: T.func,
  navigateSignUp: T.func,
  isLoading: T.bool,
};


export default ListItem;
