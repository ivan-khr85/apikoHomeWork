import { createAction } from 'redux-actions';
import * as types from './types';

export const createQuestionStart = createAction(types.CREATE_QUESTION_START);
export const createQuestionSuccess = createAction(types.CREATE_QUESTION_SUCCESS);
export const createQuestionError = createAction(types.CREATE_QUESTION_ERROR);

