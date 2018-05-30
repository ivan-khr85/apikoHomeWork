import {
  compose,
  pure,
  // withProps,
} from 'recompose';
import QuestionItem from './QuestionItemView';


const enhancer = compose(
  pure,
);


export default enhancer(QuestionItem);
