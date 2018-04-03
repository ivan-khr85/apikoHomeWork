const getPostById = (posts, postId) => {
  return posts.find(({ id }) => (id === postId));
};
export default getPostById;