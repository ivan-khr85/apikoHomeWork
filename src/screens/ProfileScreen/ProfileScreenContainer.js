import {
  compose,
  lifecycle,
  hoistStatics,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import gravatar from 'gravatar-api';
import { userOperations, userSelectors } from '../../modules/user';
import ProfileScreen from './ProfileScreenView';


const mapStateToProps = state => ({
  isGettingInfo: userSelectors.getGettingInfoState(state),
  isGettingInfoError: userSelectors.getGettingInfoErrorState(state),
  userEmail: userSelectors.getUserEmailState(state),
  username: userSelectors.getUsernameState(state),
});

const mapDispatchToProps = {
  getUserInfo: userOperations.getUserInfo,
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
  }),
  lifecycle({
    async componentDidMount() {
      await this.props.getUserInfo();
    },
  }),
);

export default hoistStatics(enhancer)(ProfileScreen);
