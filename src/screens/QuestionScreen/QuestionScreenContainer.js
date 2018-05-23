import {
  compose,
  hoistStatics,
  withStateHandlers,
  withHandlers,
  withPropsOnChange,
} from 'recompose';
import { connect } from 'react-redux';
import QuestionScreen from './QuestionScreenView';
import { questionsSelectors } from '../../modules/questions';
import { answersSelectors, answersOperations } from '../../modules/answers';
import { paramsToProps } from '../../utils/enhancers';
import { AlertService } from '../../services';
import { authSelectors } from '../../modules/auth';
import { navigationOperations } from '../../modules/navigation';


const mapStateToProps = (state, props) => ({
  signedIn: authSelectors.getSignedInState(state),
  
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
  
  publishAnswer: answersOperations.publishAnswer,
};

const enhancer = compose(
  paramsToProps('id'),
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers({
    description: '',
    isValid: false,
  }, {
    onChange: () => (field, value) => ({ [field]: value }),
  }),
  withHandlers({
    publishAnswer: props => async () => {
      if (props.isValid) {
        try {
          await props.publishAnswer({
            description: props.description,
            questionId: props.id,
          });
          props.onChange('description', '');
          props.getAnswers(props.id);
        } catch (err) {
          AlertService.somethingError();
        }
      } else {
        AlertService.notValidSendData();
      }
    },
    navigateSignUp: props => () => (
      props.navigation.dispatch(navigationOperations.navigateToSignUp())
    ),
  }),
  withPropsOnChange(
    ['description'],
    (props) => {
      const isValid = (
        props.description.trim().length > 30
      );
      props.onChange('isValid', isValid);
    },
  ),
);


export default hoistStatics(enhancer)(QuestionScreen);
