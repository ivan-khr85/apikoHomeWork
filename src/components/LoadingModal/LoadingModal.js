import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import * as T from 'prop-types';
import s from './styles';
import fullLogo from '../../icon/loader.gif';


const LoadingModal = ({
  isVisible,
  // loadingText,
}) => (
  <Modal
    isVisible={isVisible}
  >
      <View style={s.container}>    
        <View style={s.circle}></View>
        <View style={s.right}></View>
        <View style={s.animated}></View>
    </View>
  </Modal>
);


LoadingModal.propTypes = {
  isVisible: T.bool,
  // loadingText: T.string,
};

export default LoadingModal;
