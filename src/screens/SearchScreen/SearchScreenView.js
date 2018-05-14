import React from 'react';
import { View, Text } from 'react-native';
import { DrawerButton } from '../../components';
import { globalStyles, headerStyle } from '../../styles';

const SearchScreen = () => (
  <View style={globalStyles.align}>
    <Text>Search Screen</Text>
  </View>
);

SearchScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: (
    <DrawerButton
      onPress={() => navigation.toggleDrawer()}
      onLongPress={() => navigation.toggleDrawer()}
    />
  ),
  ...headerStyle,
});


export default SearchScreen;
