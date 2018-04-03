import { onlyUpdateForKeys } from 'recompose';
import PostListItem from './PostListItem';

const enhancer = onlyUpdateForKeys(['title', 'body']);


export default enhancer(PostListItem);