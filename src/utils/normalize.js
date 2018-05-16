export default (arr, id = 'id') => {
  const normalized = {
    ids: [],
    entities: {},
  };
  
  if (Array.isArray(arr)) {
    arr.reduce((acc, val) => {
      acc.ids.push(val[id]);
      acc.entities[val[id]] = val;

      return acc;
    }, normalized);
  }

  return normalized;
};
