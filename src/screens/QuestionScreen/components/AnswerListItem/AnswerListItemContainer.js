import { pure, compose } from 'recompose';
import AnswerListItem from './AnswerListItemView';


const enhancer = compose(
  pure,
);

export default enhancer(AnswerListItem);

