import { handleActions } from 'redux-actions';
import { COUNT_UP, COUNT_DOWN } from '../types';


const initState = 0;

export default handleActions({
  [COUNT_UP]: state => state + 1,
  [COUNT_DOWN]: state => state - 1,
}, initState);
