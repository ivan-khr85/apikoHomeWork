import {
  compose,
  pure,
} from 'recompose';
import QuestionsList from './QuestionsListView';


const enhancer = compose(
  pure,
);

export default enhancer(QuestionsList);

