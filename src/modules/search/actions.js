import { searchTypes } from './';

const setSearch = value => ({
  type: searchTypes.SET_SEARCH,
  value,
});

const clearSearch = () => ({
  type: searchTypes.CLEAR_SEARCH,
});

export default { setSearch, clearSearch };