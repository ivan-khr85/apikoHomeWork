import React from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import * as T from 'prop-types';
import s from './styles';


const LoadingModal = ({
  isVisible,
  // loadingText,
}) => (
  <Modal
    isVisible={isVisible}
  >
    <View>
      <View style={s.container}>
        <View style={s.circle} />
        <View style={s.right} />
        <View style={s.animated} />
      </View>
      {/* <Text style={s.text}>Loading...</Text> */}
    </View>
  </Modal>
);


LoadingModal.propTypes = {
  isVisible: T.bool,
  // loadingText: T.string,
};

export default LoadingModal;
