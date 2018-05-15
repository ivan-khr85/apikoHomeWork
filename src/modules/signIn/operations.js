import { AsyncStorage } from 'react-native';
import * as actions from './actions';
import Api from '../../api';


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
    throw new Error('Authentication error');
  }
};
