import { handleActions } from 'redux-actions';
import * as countTypes from './types';


const initState = 0;

export default handleActions({
  [countTypes.COUNT_UP]: state => state + 1,
  [countTypes.COUNT_DOWN]: state => state - 1,
}, initState);
