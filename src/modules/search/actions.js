import { createAction } from 'redux-actions';
import * as types from './types';

export const getQuestionsStart = createAction(types.GET_QUESTIONS_START);
export const getQuestionsSuccess = createAction(types.GET_QUESTIONS_SUCCESS);
export const getQuestionsError = createAction(types.GET_QUESTIONS_ERROR);
