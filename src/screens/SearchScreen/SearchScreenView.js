import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import s, { colorsScheme } from '../../styles';

const SearchScreen = () => (
  <View style={s.align}>
    <Text>Search Screen</Text>
  </View>
);

SearchScreen.navigationOptions = ({ navigation }) => ({
  title: 'Search',
  headerLeft: <Feather
    name="menu"
    color={colorsScheme.mainColor}
    size={35}
    onPress={() => navigation.toggleDrawer()}
  />,
});


export default SearchScreen;
