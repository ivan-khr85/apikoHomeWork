import { pure, compose } from 'recompose';
import { connect } from 'react-redux';
import AnswersList from './AnswersListView';
import { answersSelectors, answersOperations } from '../../../../modules/answers';


const mapStateToProps = state => ({
  count: answersSelectors.getAnswersCount(state),
  loadingMoreError: answersSelectors.getAnswersLoadingMoreErrorState(state),
  isLoading: answersSelectors.getAnswersLoadingState(state),
  hasNoMore: answersSelectors.getAnswersHasNoMoreState(state),
});

const mapDispatchToProps = {
  getAnswers: answersOperations.getAnswersByQuestionId,
  getAnswersMore: answersOperations.getAnswersByQuestionIdMore,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  pure,
);

export default enhancer(AnswersList);

