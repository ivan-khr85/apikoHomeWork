import { compose } from 'recompose';
import { connect } from 'react-redux';
import LoadingError from './LoadingErrorView';
import { questionsOperations } from '../../../../modules/questions';


const mapDispatchToProps = {
  getQuestions: questionsOperations.getQuestions,
};

const enhancer = compose(
  connect(
    undefined,
    mapDispatchToProps,
  ),
);

export default enhancer(LoadingError);
