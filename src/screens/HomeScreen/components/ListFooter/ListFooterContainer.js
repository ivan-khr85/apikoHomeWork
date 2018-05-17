import { compose } from 'recompose';
import { connect } from 'react-redux';
import ListFooterView from './ListFooterView';
import { questionsOperations, questionsSelectors } from '../../../../modules/questions';

const mapStateToProps = state => ({
  loadingMoreError: questionsSelectors.getQuestionsListLoadingMoreErrorState(state),
});

const mapDispatchToProps = {
  getQuestionsMore: questionsOperations.getQuestionsMore,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
);


export default enhancer(ListFooterView);
