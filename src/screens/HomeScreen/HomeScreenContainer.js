import {
  compose,
  withHandlers,
  hoistStatics,
  lifecycle,
  pure,
} from 'recompose';
import { connect } from 'react-redux';
import HomeScreen from './HomeScreenView';
import { screens } from '../../navigation';
import { questionsOperations, questionsSelectors } from '../../modules/questions';
import { answersOperations } from '../../modules/answers';


const mapStateToProps = state => ({
  loadingError: questionsSelectors.getQuestionsListErrorState(state),
});

const mapDispatchToProps = {
  getQuestions: questionsOperations.getQuestions,
  getAnswersByQuestionId: answersOperations.getAnswersByQuestionId,

};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    navigateToQuestion: props => (id) => {
      props.navigation.navigate(screens.QuestionScreen, { id });
      props.getAnswersByQuestionId(id);
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.getQuestions();
    },
  }),
  pure,
);


export default hoistStatics(enhancer)(HomeScreen);
