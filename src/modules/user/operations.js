import * as actions from './actions';
import Api from '../../api';

export const getUserInfo = () => async (dispatch) => {
  try {
    dispatch(actions.getUserInfoStart());
  
    const res = await Api.getUserInfo();
    dispatch(actions.getUserInfoSuccess({ user: res.data }));
  } catch (err) {
    dispatch(actions.getUserInfoError());
    throw new Error('Oops..., getting info error');
  }
};
