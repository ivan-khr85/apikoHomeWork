import {
  compose,
  pure,
} from 'recompose';
import QuestionItem from './QuestionItemView';


const enhancer = compose(
  pure,
);


export default enhancer(QuestionItem);
