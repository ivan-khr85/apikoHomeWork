import React from 'react';
import { View, StatusBar } from 'react-native';
// import { Provider } from 'react-redux';
// import store from './src/modules/store';
import RootNavigator from './src/navigation/RootNavigator';
import s from './src/styles';

const App = () => (
  <View style={s.fillAll}>
    <StatusBar
      barStyle="dark-content"
    />
    <RootNavigator />
  </View>
);

export default App;
