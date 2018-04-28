import { createAction } from 'redux-actions';
import { COUNT_UP, COUNT_DOWN } from '../types';

export const countUp = createAction(COUNT_UP);
export const countDown = createAction(COUNT_DOWN);
