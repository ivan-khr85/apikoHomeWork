
export default (arr, _id = '_id') => {
  const normalized = {
    ids: [],
    entities: {},
  };

  if (Array.isArray(arr)) {
    arr.reduce((acc, val) => {
      acc.ids.push(val[_id]);
      acc.entities[val[_id]] = val;
      return acc;
    }, normalized);
  }

  return normalized;
};
