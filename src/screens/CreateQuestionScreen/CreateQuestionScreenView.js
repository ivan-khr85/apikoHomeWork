import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import s, { colorsScheme } from '../../styles';

const CreateQuestionScreen = () => (
  <View style={s.align}>
    <Text>Create Question Screen</Text>
  </View>
);

CreateQuestionScreen.navigationOptions = ({ navigation }) => ({
  title: 'Create question',
  headerLeft: <Feather
    name="menu"
    color={colorsScheme.mainColor}
    size={35}
    onPress={() => navigation.toggleDrawer()}
  />,
});

export default CreateQuestionScreen;
