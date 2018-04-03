import { compose, withHandlers } from 'recompose';
import SearchPosts from './SearchPosts';

const enhancer = compose(
  withHandlers({
    onSubmit: () => event => {
      event.preventDefault();
    }
  })
);
export default enhancer(SearchPosts);