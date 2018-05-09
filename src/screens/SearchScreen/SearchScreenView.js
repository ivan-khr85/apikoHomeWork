import React from 'react';
import { View, Text } from 'react-native';
import DrawerButton from '../../components/DrawerButton';
import s from '../../styles';

const SearchScreen = () => (
  <View style={s.align}>
    <Text>Search Screen</Text>
  </View>
);

SearchScreen.navigationOptions = ({ navigation }) => ({
  title: 'Search',
  headerLeft: (
    <DrawerButton
      onPress={() => navigation.toggleDrawer()}
      onLongPress={() => navigation.toggleDrawer()}
    />
  ),
});


export default SearchScreen;
