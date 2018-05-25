import { AsyncStorage } from 'react-native';
import axios from 'axios';
import * as actions from './actions';
import Api from '../../api';
import { navigationOperations } from '../navigation';

export const signUp = ({ username, password, email }) => async (dispatch) => {
  try {
    dispatch(actions.signUpStart());
  
    const res = await Api.signUp({ username, password, email });
    await AsyncStorage.multiSet([
      ['token', res.data.token],
      ['_id', res.data.user._id],
      ['email', res.data.user.email],
      ['username', res.data.user.username],
    ]);
    Api.setToken(res.data.token);
    dispatch(actions.signUpSuccess());
  } catch (err) {
    dispatch(actions.signUpError());
    throw new Error('Sign up error');
  }
};


export const signIn = ({ password, email }) => async (dispatch) => {
  try {
    dispatch(actions.signInStart());

    const res = await Api.signIn({ password, email });

    await AsyncStorage.multiSet([
      ['token', res.data.token],
      ['_id', res.data.user._id],
      ['email', res.data.user.email],
      ['username', res.data.user.username],
    ]);
    Api.setToken(res.data.token);
    dispatch(actions.signInSuccess());
  } catch (err) {
    dispatch(actions.signInError());
    throw new Error('Sign In error');
  }
};

export const signOut = () => async (dispatch) => {
  try {
    dispatch(actions.signOutStart());

    await Api.signOut();
    await AsyncStorage.clear();
    axios.defaults.headers.common.Authorization = `Bearer ${null}`;
    dispatch(actions.signOutSuccess());
  } catch (err) {
    await AsyncStorage.clear();
    dispatch(navigationOperations.navigateToUnauthorized());
  }
};
