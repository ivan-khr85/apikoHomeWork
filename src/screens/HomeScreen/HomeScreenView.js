import React from 'react';
import * as T from 'prop-types';
import { View, Text } from 'react-native';
import { globalStyles, headerStyle } from '../../styles';
import Touchable from '../../components/Touchable';
import DrawerButtonView from '../../components/DrawerButton/DrawerButtonView';

const HomeScreen = ({
  navigateToQuestion,
}) => (
  <View style={globalStyles.align}>
    <Text>Home Screen</Text>
    <Text />
    <Touchable
      onPress={navigateToQuestion}
      style={globalStyles.button}
    >
      <Text>Go to question</Text>
    </Touchable>
  </View>
);

HomeScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: (
    <DrawerButtonView
      onPress={() => navigation.toggleDrawer()}
      onLongPress={() => navigation.toggleDrawer()}
    />
  ),
  ...headerStyle,
});

HomeScreen.propTypes = {
  navigateToQuestion: T.func,
};


export default HomeScreen;
