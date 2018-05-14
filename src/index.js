import React from 'react';
import T from 'prop-types';
import { AppLoading } from 'expo';
import { BackHandler, View, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Provider } from 'react-redux';
import {
  compose,
  withState,
  withHandlers,
  lifecycle,
} from 'recompose';
import store from './store';
import { selectStyle, globalStyles } from './styles';
import { appOperations } from './modules/app';
import RootNavigator from './navigation/RootNavigator';
import { AlertService } from './services';


const isAndroid = Platform.OS === 'android';

SafeAreaView.setStatusBarHeight(
  isAndroid
    ? 0
    : selectStyle({ iphoneX: 44, default: 20 }),
);


const App = ({
  showLoading,
  setLoadingStatus,
  asyncJob,
}) => {
  if (showLoading) {
    return (
      <AppLoading
        startAsync={asyncJob}
        onFinish={() => setLoadingStatus(false)}
        onError={console.warn} // eslint-disable-line  
      />
    );
  }


  return (
    <Provider store={store}>
      <View style={globalStyles.fillAll}>
        <RootNavigator />
      </View>
    </Provider>
  );
};

App.propTypes = {
  showLoading: T.bool,
  setLoadingStatus: T.func,
  asyncJob: T.func,
};


const enhance = compose(
  withState('showLoading', 'setLoadingStatus', true),
  withHandlers({
    asyncJob: () => async () => {
      await Promise.all([
        store.dispatch(appOperations.initialization()),
      ]);
    },
    navigateBack: () => () => {
      AlertService.closeApp(
        BackHandler.exitApp,
      );
      return true;
    },
  }),
  lifecycle({
    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.props.navigateBack);
    },
  }),
);

export default enhance(App);
