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
