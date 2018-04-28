import React from 'react';
import { StyleSheet, View } from 'react-native';
import Count from './Components/Count';
import { Provider } from 'react-redux';
import store from './modules/store';




const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Count />
    </View>
  </Provider>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;