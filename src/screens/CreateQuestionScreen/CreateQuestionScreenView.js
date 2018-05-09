import React from 'react';
import { View, Text } from 'react-native';
import s from '../../styles';
import { DrawerButton } from '../../components';


const CreateQuestionScreen = () => (
  <View style={s.align}>
    <Text>Create Question Screen</Text>
  </View>
);

CreateQuestionScreen.navigationOptions = ({ navigation }) => ({
  title: 'Create question',
  headerLeft: (
    <DrawerButton
      onPress={() => navigation.toggleDrawer()}
      onLongPress={() => navigation.toggleDrawer()}
    />
  ),
});

export default CreateQuestionScreen;
