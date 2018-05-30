import {
  compose,
  lifecycle,
  hoistStatics,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import gravatar from 'gravatar-api';
import { screens } from '../../navigation';
import { userOperations, userSelectors } from '../../modules/user';
import { navigationOperations } from '../../modules/navigation';
import { answersOperations } from '../../modules/answers';
import ProfileScreen from './ProfileScreenView';


const mapStateToProps = state => ({
  isGettingInfo: userSelectors.getGettingInfoState(state),
  isGettingInfoError: userSelectors.getGettingInfoErrorState(state),
  userEmail: userSelectors.getUserEmailState(state),
  username: userSelectors.getUsernameState(state),
  userQuestions: userSelectors.getUserQuestionsState(state),
});

const mapDispatchToProps = {
  getUserInfo: userOperations.getUserInfo,
  getAnswersByQuestionId: answersOperations.getAnswersByQuestionId,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    getUserAvatarUrl: props => () => {
      const options = {
        email: props.userEmail,
        parameters: { size: '200', default: 'mp' },
        secure: true,
      };
      return gravatar.imageUrl(options);
    },
    navigateToQuestion: props => (id, createdAt, tags, title) => {
      props.navigation.navigate(screens.QuestionScreen, {
        id,
        createdAt,
        tags,
        title,
        onPress: props.navigation.dispatch(navigationOperations.navigateToProfile()),
      });
      props.getAnswersByQuestionId(id);
    },
  }),
  lifecycle({
    async componentDidMount() {
      await this.props.getUserInfo();
    },
  }),
);

export default hoistStatics(enhancer)(ProfileScreen);
