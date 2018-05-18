import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import AnswerItem from './AnswerItemView';


const enhancer = compose(
  connect(),
  pure,
);


export default enhancer(AnswerItem);
