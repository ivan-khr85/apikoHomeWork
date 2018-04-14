import { combineReducers } from 'redux';

import user from './user';
import search from './search';
import sort from './sort';
import answerSort from './answerSort';

export default combineReducers({
  user,
  search,
  sort,
  answerSort,
});
