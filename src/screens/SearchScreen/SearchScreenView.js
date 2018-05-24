import React from 'react';
import { View, Text } from 'react-native';
import Search from '../../libs/react-native-search-box';
import { DrawerButton } from '../../components';
import { headerStyle } from '../../styles';
import s from './style';


const SearchScreen = () => (
  <View style={s.container}>
    <View style={s.searchContainer}>
      <Search
        style={s.searchInput}
        inputHight={36}
      />
    </View>
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
