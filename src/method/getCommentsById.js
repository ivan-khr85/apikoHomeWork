const getCommentsById = (comments, id) => {
  if (comments === undefined || id === undefined) {
    return [];
  }
  return comments
    .filter(({ postId }) => postId === id);
};
export default getCommentsById;