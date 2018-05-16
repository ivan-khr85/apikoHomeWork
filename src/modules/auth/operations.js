import { AsyncStorage } from 'react-native';
import * as actions from './actions';
import Api from '../../api';


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
    

    dispatch(actions.signUpSuccess());
  } catch (err) {
    console.log(err);
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

    dispatch(actions.signOutSuccess());
  } catch (err) {
    dispatch(actions.signOutError());
    throw new Error('Sign out error');
  }
};
