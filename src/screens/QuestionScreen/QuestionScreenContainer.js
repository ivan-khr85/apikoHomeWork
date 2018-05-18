import { compose, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import QuestionScreen from './QuestionScreenView';
import { questionsSelectors } from '../../modules/questions';
import { paramsToProps } from '../../utils/enhancers';

const mapStateToProps = (state, props) => ({
  question: questionsSelectors.getQuestionById(state, props.id),
  
});

const mapDispatchToProps = {
  

};

const enhancer = compose(
  paramsToProps('id'),
  connect(mapStateToProps, mapDispatchToProps),

);


export default hoistStatics(enhancer)(QuestionScreen);
