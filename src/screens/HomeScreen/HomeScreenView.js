import React from 'react';
import * as T from 'prop-types';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import s, { colorsScheme } from '../../styles';
import Touchable from '../../components/Touchable';

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
    <Touchable
      onPress={() => navigation.toggleDrawer()}
      onLongPress={() => navigation.toggleDrawer()}
    >
      <Feather
        name="menu"
        color={colorsScheme.mainColor}
        size={35}
      />
    </Touchable>
  ),
});

HomeScreen.propTypes = {
  navigateToQuestion: T.func,
};


export default HomeScreen;
