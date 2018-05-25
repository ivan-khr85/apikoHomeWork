import {
  compose,
  withHandlers,
  hoistStatics,
  pure,
  withStateHandlers,
  withPropsOnChange,
  lifecycle,
  withProps,
} from 'recompose';
import { connect } from 'react-redux';
import { screens } from '../../navigation';
import { questionsOperations, questionsSelectors } from '../../modules/questions';
import { answersOperations } from '../../modules/answers';
import SearchScreen from './SearchScreenView';
import { AlertService } from '../../services';

const mapStateToProps = state => ({
  isLoading: questionsSelectors.getQuestionsListLoadingState(state),
  isLoadingMore: questionsSelectors.getQuestionsListLoadingMoreState(state),
  questionsList: questionsSelectors.getQuestionsList(state),
  hasNoMore: questionsSelectors.getQuestionsListHasNoMoreState(state),

  loadingError: questionsSelectors.getQuestionsListErrorState(state),
  
});

const mapDispatchToProps = {
  getQuestions: questionsOperations.getQuestions,
  getQuestionsMore: questionsOperations.getQuestionsMore,
  getAnswersByQuestionId: answersOperations.getAnswersByQuestionId,

};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers({
    hideData: false,
    inputValue: '',
    timerId: '',
  }, {
    onChange: () => (field, value) => ({ [field]: value }),
  }),
  withHandlers({
    navigateToQuestion: props => (id) => {
      props.navigation.navigate(screens.QuestionScreen, { id });
      props.getAnswersByQuestionId(id);
    },
    onPressCancel: props => () => {
      props.onChange('inputValue', '');
      props.onChange('hideData', true);
    },
  }),
  withPropsOnChange(
    ['inputValue'],
    (props) => {
      props.onChange('hideData', true);
      clearTimeout(props.timerId);
      if (props.inputValue.trim()) {
        props.onChange('timerId',
          setTimeout(async () => {
            try {
              await props.getQuestions(props.inputValue);
              props.onChange('hideData', false);
            } catch (err) {
              AlertService.somethingError();
            }
          }, 300),
        );
      } else {
        props.onChange('hideData', true);
      }
    },
  ),
  lifecycle({
    componentDidMount() {
      this.props.onChange('hideData', true);
    },

  }),
  pure,
);

export default hoistStatics(enhancer)(SearchScreen);

// goTo = {() => navigation.navigate(screens.SearchScreen)}
