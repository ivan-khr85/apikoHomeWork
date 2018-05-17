import {
  compose,
  withHandlers,
  hoistStatics,
  lifecycle,
} from 'recompose';
import { connect } from 'react-redux';
import HomeScreen from './HomeScreenView';
import { screens } from '../../navigation';
import { questionsOperations, questionsSelectors } from '../../modules/questions';

const mapStateToProps = state => ({
  isLoading: questionsSelectors.getQuestionsListLoadingState(state),
  isLoadingMore: questionsSelectors.getQuestionsListLoadingMoreState(state),
  questionsList: questionsSelectors.getQuestionsList(state),
  hasNoMore: questionsSelectors.getQuestionsListHasNoMoreState(state),
});

const mapDispatchToProps = {
  getQuestions: questionsOperations.getQuestions,
  getQuestionsMore: questionsOperations.getQuestionsMore,

};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    navigateToQuestion: props => () => props.navigation.navigate(screens.QuestionScreen),
  }),
  lifecycle({
    componentDidMount() {
      this.props.getQuestions();
    },
  }),
);


export default hoistStatics(enhancer)(HomeScreen);
