import { pure, compose } from 'recompose';
import ListItem from './ListItemView';

  
const enhancer = compose(
  pure,
);

export default enhancer(ListItem);

