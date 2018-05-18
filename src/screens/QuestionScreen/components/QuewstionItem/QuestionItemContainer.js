import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import QuestionItem from './QuestionItemView';


const enhancer = compose(
  connect(),
  pure,
);


export default enhancer(QuestionItem);
