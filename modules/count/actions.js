import { createAction } from 'redux-actions';
import * as countTypes from './types';

export const countUp = createAction(countTypes.COUNT_UP);
export const countDown = createAction(countTypes.COUNT_DOWN);
