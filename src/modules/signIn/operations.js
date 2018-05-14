import { AsyncStorage } from 'react-native';
import * as actions from './actions';
import Api from '../../api';


export const signIn = ({ password, email }) => async (dispatch) => {
  try {
    dispatch(actions.signInStart());


    const res = await Api.signIn({ password, email });

    console.log(res.data); // eslint-disable-line
    await AsyncStorage.setItem('token', res.data.token);
    await AsyncStorage.setItem('user', res.data.user);

    dispatch(actions.signInSuccess());
  } catch (err) {
    dispatch(actions.signInError());
    throw new Error('Authentication error');
  }
};
