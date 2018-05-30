import React from 'react';
import {
  compose,
  hoistStatics,
  withStateHandlers,
  withHandlers,
  withPropsOnChange,
  setStatic,
} from 'recompose';
import { connect } from 'react-redux';
import QuestionScreen from './QuestionScreenView';
import { headerStyle } from '../../styles';
import { BackBtn } from '../../components';
import { questionsSelectors } from '../../modules/questions';
import { answersSelectors, answersOperations } from '../../modules/answers';
import { paramsToProps } from '../../utils/enhancers';
import { AlertService } from '../../services';
import { authSelectors } from '../../modules/auth';
import { navigationOperations } from '../../modules/navigation';


const mapStateToProps = (state, props) => ({
  isPublishing: answersSelectors.getPublishAnswerState(state),
  signedIn: authSelectors.getSignedInState(state),
  
  question: questionsSelectors.getQuestionById(state, props.id),
  answers: answersSelectors.getAnswersByQuestionId(state, props.id),

  loadingError: answersSelectors.getAnswersErrorState(state),
});

const mapDispatchToProps = {
  publishAnswer: answersOperations.publishAnswer,
};

const enhancer = compose(
  paramsToProps('id', 'createdAt', 'tags', 'title'),
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
        props.description.trim().length > 4
      );
      props.onChange('isValid', isValid);
    },
  ),
  setStatic(
    'navigationOptions',
    ({ navigation }) => ({
      ...headerStyle,
      headerLeft: (
        <BackBtn navigation={navigation} title="Back" />
      ),
    }),
  ),
);


export default hoistStatics(enhancer)(QuestionScreen);
