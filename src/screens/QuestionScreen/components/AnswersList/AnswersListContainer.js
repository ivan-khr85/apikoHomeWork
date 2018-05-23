import { pure, compose } from 'recompose';
import { connect } from 'react-redux';
import AnswersList from './AnswersListView';
import { answersSelectors } from '../../../../modules/answers';


const mapStateToProps = state => ({
  count: answersSelectors.getAnswersCount(state),
});

const mapDispatchToProps = {

};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  pure,
);

export default enhancer(AnswersList);

