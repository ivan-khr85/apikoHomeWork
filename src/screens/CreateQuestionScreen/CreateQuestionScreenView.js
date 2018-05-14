import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles, headerStyle } from '../../styles';
import { DrawerButton } from '../../components';


const CreateQuestionScreen = () => (
  <View style={globalStyles.align}>
    <Text>Create Question Screen</Text>
  </View>
);

CreateQuestionScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: (
    <DrawerButton
      onPress={() => navigation.toggleDrawer()}
      onLongPress={() => navigation.toggleDrawer()}
    />
  ),
  ...headerStyle,
});

export default CreateQuestionScreen;
