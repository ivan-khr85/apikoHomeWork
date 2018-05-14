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
    dispatch(actions.signUpError());
    throw new Error('Authentication error');
  }
};
