import { Alert } from 'react-native';
import i18n from '../../i18n';

export const singOut = onPress => Alert.alert(
  i18n.t('signOut.signOut'),
  i18n.t('signOut.messages'),
  [
    { text: i18n.t('signOut.ok'), onPress },
    { text: i18n.t('signOut.cancel'), style: 'cancel' },
  ],
);

export const closeApp = onPress => Alert.alert(
  i18n.t('closeApp.closeApp'),
  i18n.t('closeApp.messages'),
  [
    { text: i18n.t('closeApp.ok'), onPress },
    { text: i18n.t('closeApp.cancel'), style: 'cancel' },
  ],
);
