import { pure, compose } from 'recompose';
import { connect } from 'react-redux';
import { questionsOperations } from '../../../../modules/questions';
import QuestionsList from './QuestionsListView';


const mapDispatchToProps = {
  getQuestionsMore: questionsOperations.getQuestionsMore,
};

const enhancer = compose(
  connect(undefined, mapDispatchToProps),
  pure,
);
export default enhancer(QuestionsList);

