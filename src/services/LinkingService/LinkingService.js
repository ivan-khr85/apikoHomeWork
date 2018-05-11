import { Linking, Alert } from 'react-native';
import i18n from '../../i18n';

const showErrAlert = () => {
  Alert.alert(
    i18n.t('errors.somethingWrong'),
    i18n.t('errors.openLinkError'),
  );
};

const openURL = (url) => {
  Linking.openURL(url)
    .catch(() => showErrAlert());
};

export const openTerms = () => openURL('https://google.com');
