import {
  compose,
  hoistStatics,
} from 'recompose';
import { connect } from 'react-redux';
import QuestionScreen from './QuestionScreenView';
import { questionsSelectors } from '../../modules/questions';
import { answersSelectors, answersOperations } from '../../modules/answers';
import { paramsToProps } from '../../utils/enhancers';

const mapStateToProps = (state, props) => ({
  question: questionsSelectors.getQuestionById(state, props.id),
  answers: answersSelectors.getAnswersByQuestionId(state, props.id),

  isLoading: answersSelectors.getAnswersLoadingState(state),
  isLoadingMore: answersSelectors.getAnswersLoadingMoreState(state),
  hasNoMore: answersSelectors.getAnswersHasNoMoreState(state),

  loadingError: answersSelectors.getAnswersErrorState(state),
});

const mapDispatchToProps = {
  getAnswers: answersOperations.getAnswersByQuestionId,
  getAnswersMore: answersOperations.getAnswersByQuestionIdMore,

};

const enhancer = compose(
  paramsToProps('id'),
  connect(mapStateToProps, mapDispatchToProps),
);


export default hoistStatics(enhancer)(QuestionScreen);
