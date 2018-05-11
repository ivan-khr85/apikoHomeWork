import React from 'react';
import { View, Text } from 'react-native';
import { NavigationActions, DrawerActions } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import * as T from 'prop-types';
import Touchable from '../Touchable';
import s from './styles';


const DrawerItem = ({
  onPress,
  navigation,
  activeItemKey,
  title,
  iconName,
  borderTop,
}) => {
  const navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    navigation.dispatch(navigateAction);
  };

  const closeDrawer = () => navigation.dispatch(DrawerActions.closeDrawer());
  
  const isActive = activeItemKey === title;

  return (
    <Touchable
      onPress={
        onPress || (
          isActive ? closeDrawer : navigateToScreen(title)
        )
      }
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
  onPress: T.func,
  title: T.string,
  iconName: T.string,
  borderTop: T.bool,
  navigation: T.object,
  activeItemKey: T.string,

  
};

export default DrawerItem;
