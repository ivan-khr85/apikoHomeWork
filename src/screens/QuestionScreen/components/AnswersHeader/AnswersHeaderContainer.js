import { pure, compose } from 'recompose';
import AnswersHeader from './AnswersHeaderView';


const enhancer = compose(
  pure,
);

export default enhancer(AnswersHeader);

