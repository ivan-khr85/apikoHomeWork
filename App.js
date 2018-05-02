import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Home from './screens/Home';
import store from './modules/store';
import s from './styles/main';

const App = () => (
  <Provider store={store}>
    <View style={s.container}>
      <Home />
    </View>
  </Provider>
);

export default App;
