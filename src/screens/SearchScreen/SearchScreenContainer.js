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
import { searchOperations, searchSelectors } from '../../modules/search';
import { answersOperations } from '../../modules/answers';
import SearchScreen from './SearchScreenView';

const mapStateToProps = state => ({
  isLoading: searchSelectors.getQuestionsListLoadingState(state),
  isLoadingMore: searchSelectors.getQuestionsListLoadingMoreState(state),
  questionsList: searchSelectors.getQuestionsList(state),
  hasNoMore: searchSelectors.getQuestionsListHasNoMoreState(state),

  loadingError: searchSelectors.getQuestionsListErrorState(state),

});

const mapDispatchToProps = {
  getQuestions: searchOperations.getQuestions,
  getQuestionsMore: searchOperations.getQuestionsMore,
  getAnswersByQuestionId: answersOperations.getAnswersByQuestionId,

  setInitialState: searchOperations.clearState,
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
    searchValue: props => async () => {
      try {
        await props.getQuestions(props.inputValue);
      } catch (err) {
        // AlertService.SignUpErr();
      }
    },
    onPressCancel: props => () => {
      props.setInitialState();
      props.onChange('inputValue', '');
      props.onChange('hideData', true);
    },
  }),
  withPropsOnChange(
    ['inputValue'],
    (props) => {
      clearTimeout(props.timerId);
      if (props.inputValue) {
        props.onChange('hideData', false);
        props.onChange('timerId',
          setTimeout(async () => {
            try {
              await props.getQuestions(props.inputValue);
            } catch (err) {
              // AlertService.SignUpErr();
            }
          }, 300),
        );
      } else {
        props.setInitialState();
      }
    },
  ),
  lifecycle({
    componentDidMount() {
      this.props.setInitialState();
    },

  }),
  pure,
);

export default hoistStatics(enhancer)(SearchScreen);

// goTo = {() => navigation.navigate(screens.SearchScreen)}