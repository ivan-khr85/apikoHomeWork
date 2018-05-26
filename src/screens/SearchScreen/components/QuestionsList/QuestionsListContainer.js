import {
  compose,
  pure,
} from 'recompose';
import { connect } from 'react-redux';
import { questionsOperations, questionsSelectors } from '../../../../modules/questions';
import QuestionsList from './QuestionsListView';


const mapStateToProps = state => ({
  loadingMoreError: questionsSelectors.getQuestionsListLoadingMoreErrorState(state),
});

const mapDispatchToProps = {
  getQuestionsMore: questionsOperations.getQuestionsMore,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  pure,
);

export default enhancer(QuestionsList);

