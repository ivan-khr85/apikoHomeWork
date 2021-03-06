import {
  compose,
  withHandlers,
  hoistStatics,
  pure,
  withStateHandlers,
  withPropsOnChange,
  lifecycle,
} from 'recompose';
import { connect } from 'react-redux';
import { screens } from '../../navigation';
import { questionsOperations, questionsSelectors } from '../../modules/questions';
import { answersOperations } from '../../modules/answers';
import { searchOperations, searchSelectors } from '../../modules/search';
import SearchScreen from './SearchScreenView';
import { navigationOperations } from '../../modules/navigation';
import { AlertService } from '../../services';

const mapStateToProps = state => ({
  isLoading: questionsSelectors.getQuestionsListLoadingState(state),
  isLoadingMore: questionsSelectors.getQuestionsListLoadingMoreState(state),
  questionsList: questionsSelectors.getQuestionsList(state),
  hasNoMore: questionsSelectors.getQuestionsListHasNoMoreState(state),

  loadingError: questionsSelectors.getQuestionsListErrorState(state),

  searchHistory: searchSelectors.getSearchHistory(state),
});

const mapDispatchToProps = {
  getQuestions: questionsOperations.getQuestions,
  getQuestionsMore: questionsOperations.getQuestionsMore,
  getAnswersByQuestionId: answersOperations.getAnswersByQuestionId,

  setItemToHistory: searchOperations.setItemToHistory,
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
      props.navigation.navigate(screens.QuestionScreen, {
        id,
        onPress: props.navigation.dispatch(navigationOperations.navigateToSearch()),
      });
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
          }, 200),
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
