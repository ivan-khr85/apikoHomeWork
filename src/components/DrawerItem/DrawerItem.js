import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as T from 'prop-types';
import Touchable from '../Touchable';
import s from './styles';


const DrawerItem = ({
  onPress,
  title,
  iconName,
  activeItemKey,
  borderTop,
  closeDrawer,
}) => {
  const isActive = activeItemKey === title;


  return (
    <Touchable
      onPress={isActive ? closeDrawer : onPress}
    >
      <View style={[s.container, isActive && s.activeContainer, borderTop && s.borderTop]}>
        <Ionicons
          name={iconName}
          size={28}
          style={[s.icon, isActive && s.activeIcon]}
        />
        <Text style={[s.title, isActive && s.activeTitle]}>
          {title}
        </Text>
      </View>
    </Touchable>
  );
};


DrawerItem.propTypes = {
  title: T.string,
  iconName: T.string,
  activeItemKey: T.string,
  onPress: T.func,
  borderTop: T.bool,
  closeDrawer: T.func,

};

export default DrawerItem;
