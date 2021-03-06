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
  const isActive = activeItemKey === title;

  const closeDrawer = () => navigation.dispatch(DrawerActions.closeDrawer());

  const push = (routeName, params) => (
    NavigationActions.navigate({
      routeName,
      params,
    })
  );

  const navigateToScreen = (route) => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      // params: {},
      // action: NavigationActions.navigate({ routeName: route }),
    });
    navigation.dispatch(push(route));
    navigation.dispatch(navigateAction);
  };

  // const navigateToScreen = route => navigation.navigate(route);

  const onItemPress = () => {
    if (typeof onPress === 'function') {
      onPress();
    } else {
      navigateToScreen(title);
    }
    closeDrawer();
  };

  return (
    <Touchable
      onPress={onItemPress}
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
