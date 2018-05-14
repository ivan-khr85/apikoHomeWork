import { AsyncStorage } from 'react-native';
import * as actions from './actions';
import Api from '../../api';


export const signUp = ({ username, password, email }) => async (dispatch) => {
  try {
    dispatch(actions.signUpStart());

  
    const res = await Api.signUp({ username, password, email });

    console.log(res.data);
    // await AsyncStorage.setItem('token', res.data)

    dispatch(actions.signUpSuccess());
  } catch (err) {
    dispatch(actions.signUpError());
    throw new Error('Authentication error');
  }
};
