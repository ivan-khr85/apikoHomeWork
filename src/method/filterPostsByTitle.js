const filterPostsByTitle = (posts, text) => (
  posts
    .filter(({ title }) => {
      if (!title) { return false; }
      return title.toLowerCase().indexOf(text.toLowerCase()) !== -1;
    })
);

export default filterPostsByTitle;