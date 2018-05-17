import React from 'react';
import T from 'prop-types';
import { AppLoading } from 'expo';
import { BackHandler, View, Platform, Text } from 'react-native';
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
import RootNavigatorContainer from './navigation';
import { AlertService } from './services';


const isAndroid = Platform.OS === 'android';

SafeAreaView.setStatusBarHeight(
  isAndroid
    ? 0
    : selectStyle({ iphoneX: 44, default: 20 }),
);


const App = ({
  showLoading,
  onFinish,
  asyncJob,
}) => {
  if (showLoading) {
    return (
      <AppLoading
        startAsync={asyncJob}
        onFinish={onFinish}
        onError={console.warn} // eslint-disable-line  
      />
    );
  }

  return (
    <Provider store={store}>
      <View style={globalStyles.fillAll}>
        <RootNavigatorContainer />
      </View>
    </Provider>
  );
};

App.propTypes = {
  showLoading: T.bool,
  onFinish: T.func,
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
    onFinish: props => () => {
      props.setLoadingStatus(false);
    },
  }),
  lifecycle({
    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.props.navigateBack);
      
    },
  }),
);

export default enhance(App);
