import { Alert } from 'react-native';
import i18n from '../../i18n';

export const showAlert = (title, subTitle, buttons, options) => { //eslint-disable-line
  Alert.alert(
    title, subTitle, buttons, options,
  );
};

export const singOut = onPress => showAlert(
  i18n.t('signOut.signOut'),
  i18n.t('signOut.messages'),
  [
    { text: i18n.t('signOut.ok'), onPress },
    { text: i18n.t('signOut.cancel'), style: 'cancel' },
  ],
);

export const closeApp = onPress => showAlert(
  i18n.t('closeApp.closeApp'),
  i18n.t('closeApp.messages'),
  [
    { text: i18n.t('closeApp.ok'), onPress },
    { text: i18n.t('closeApp.cancel'), style: 'cancel' },
  ],
);

export const SignUpErr = () => showAlert(
  i18n.t('SignUpErr.title'),
  i18n.t('SignUpErr.messages'),
  [
    { text: i18n.t('SignUpErr.ok') },
  ],
);


export const SignInErr = () => showAlert(
  i18n.t('SignInErr.title'),
  i18n.t('SignInErr.messages'),
  [
    { text: i18n.t('SignInErr.ok') },
  ],
);

export const noValidInputData = () => showAlert(
  i18n.t('noValidInputData.title'),
  i18n.t('noValidInputData.messages'),
  [
    { text: i18n.t('noValidInputData.ok') },
  ],
);


export const SendEmailRestorePasswordAlert = onPress => showAlert(
  i18n.t('SendEmailRestorePasswordAlert.title'),
  i18n.t('SendEmailRestorePasswordAlert.messages'),
  [
    {
      text: i18n.t('SendEmailRestorePasswordAlert.ok'),
      onPress,
    },
  ],
  { cancelable: false },
);


export const questionLoadingErr = onPress => showAlert(
  i18n.t('questionLoadingErr.title'),
  i18n.t('questionLoadingErr.messages'),
  [
    { text: i18n.t('questionLoadingErr.ok'), onPress },
    { text: i18n.t('questionLoadingErr.cancel'), style: 'cancel' },
  ],
  
);

export const notValidSendData = () => showAlert(
  i18n.t('notValidSendData.title'),
  i18n.t('notValidSendData.messages'),
  [
    { text: i18n.t('notValidSendData.ok') },
  ],
);

export const somethingError = () => showAlert(
  i18n.t('somethingError.title'),
  i18n.t('somethingError.messages'),
  [
    { text: i18n.t('somethingError.ok') },
  ],
);