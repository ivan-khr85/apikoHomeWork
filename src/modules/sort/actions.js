import { sortTypes } from './';

const setSort = value => ({
  type: sortTypes.SET_SORT,
  value,
});

export default { setSort };