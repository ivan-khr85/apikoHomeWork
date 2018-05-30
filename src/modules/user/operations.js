import * as actions from './actions';
import Api from '../../api';
import { AlertService } from '../../services';

export const getUserInfo = () => async (dispatch) => {
  try {
    dispatch(actions.getUserInfoStart());
  
    const res = await Api.getUserInfo();
    dispatch(actions.getUserInfoSuccess({ user: res.data }));
  } catch (err) {
    AlertService.somethingError();
    dispatch(actions.getUserInfoError());
  }
};
