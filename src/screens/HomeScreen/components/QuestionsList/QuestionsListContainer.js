import { pure, compose } from 'recompose';
import { connect } from 'react-redux';
import { questionsOperations, questionsSelectors } from '../../../../modules/questions';
import QuestionsList from './QuestionsListView';


const mapStateToProps = state => ({
  isLoading: questionsSelectors.getQuestionsListLoadingState(state),
  loadingMoreError: questionsSelectors.getQuestionsListLoadingMoreErrorState(state),
  questionsList: questionsSelectors.getQuestionsList(state),
  isLoadingMore: questionsSelectors.getQuestionsListLoadingMoreState(state),
  hasNoMore: questionsSelectors.getQuestionsListHasNoMoreState(state),

  
});

const mapDispatchToProps = {
  getQuestionsMore: questionsOperations.getQuestionsMore,
  getQuestions: questionsOperations.getQuestions,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  pure,
);
export default enhancer(QuestionsList);

