import React from 'react';
import * as T from 'prop-types';
import { View, Text } from 'react-native';
import s from '../../styles';
import Touchable from '../../components/Touchable';
import DrawerButtonView from '../../components/DrawerButton/DrawerButtonView';

const HomeScreen = ({
  navigateToQuestion,
}) => (
  <View style={s.align}>
    <Text>Home Screen</Text>
    <Text />
    <Touchable
      onPress={navigateToQuestion}
      style={s.button}
    >
      <Text>Go to question</Text>
    </Touchable>
  </View>
);

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: 'Home',
  headerLeft: (
    <DrawerButtonView
      onPress={() => navigation.toggleDrawer()}
      onLongPress={() => navigation.toggleDrawer()}
    />
  ),
});

HomeScreen.propTypes = {
  navigateToQuestion: T.func,
};


export default HomeScreen;
