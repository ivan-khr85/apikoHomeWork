import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Home from './screens/Home';
import store from './modules/store';
import { gray } from './screens/colorsScheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Home />
    </View>
  </Provider>
);

export default App;
