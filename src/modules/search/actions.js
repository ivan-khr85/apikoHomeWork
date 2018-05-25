import { createAction } from 'redux-actions';
import * as types from './types';

export const addItemToSearchHistory = createAction(types.ADD_ITEM_TO_SEARCH_HISTORY);
export const removeItemToSearchHistory = createAction(types.REMOVE_ITEM_FROM_SEARCH_HISTORY);
