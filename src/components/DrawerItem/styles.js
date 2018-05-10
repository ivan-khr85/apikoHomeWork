import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: 67,
    backgroundColor: colors.drawerItem.background,
    alignItems: 'center',
    flexDirection: 'row',
  },


  activeContainer: {
    backgroundColor: colors.drawerItem.activeBackground,
      
  },

  icon: {
    width: 32,
    height: 32,
    marginRight: 16,
    marginLeft: 16,
    color: colors.drawerItem.icon,
  },

  activeIcon: {
    color: colors.drawerItem.activeIcon,
  },

  title: {
    color: colors.drawerItem.title,
    fontSize: 17,
    fontWeight: 'bold',
  },
  
  activeTitle: {
    color: colors.drawerItem.activeTitle,
  },

  borderTop: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.drawerItem.border,

  },
});

export default style;
